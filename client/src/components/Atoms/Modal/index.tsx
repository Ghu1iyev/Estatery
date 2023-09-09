import { useState } from "react";
import { client } from "../../../service/sanity";

import Loader from "../Loader";

const Modal = () => {
  
  const [show, setShow] = useState(false);
  const [loading,setLoading] = useState(false);
  const [form, setForm] = useState({
    applied: "",
    tenant: "",
    totalInCome: "",
    inComeToRent: "",
    image: ""
  })

  const HandleChange = (e: any) => {
    setForm({...form, [e.target.name]: e.target.value})
  }
  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()
    client.create({
      _type: "tenancy",
      image: form.image,
      applied: form.applied,
      tenant: form.tenant,
      totalIncome: form.totalInCome,
      incomeToRent: form.inComeToRent,
    }).finally(() => {
      setLoading(false)
      setForm({
      applied: "",
    tenant: "",
    totalInCome: "",
    inComeToRent: "",
    image: ""
      })
    })
  }
  
  return (
    <>
      <div
        id="staticModal"
        data-modal-backdrop="static"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          show == true ? "hidden" : "fixed"
        } fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-black rounded-lg  shadow dark:bg-gray-700 left-[26rem] top-[100px]">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white"></h3>
              <button
                onClick={() => setShow(!show)}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="staticModal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="applied"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Applied
                  </label>
                  <input
                    onChange={HandleChange}
                    type="date"
                    name="applied"
                    id="applied"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={form.applied}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="tenant"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Tenant
                  </label>
                  <input
                  onChange={HandleChange}
                    type="text"
                    id="tenant"
                    name="tenant"
                    value={form.tenant}
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="totalInCome"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Total In come
                  </label>
                  <input
                    value={form.totalInCome}
                    onChange={HandleChange}
                    type="text"
                    name="totalInCome"
                    id="totalInCome"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="inComeToRent"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    in Come To Rent
                  </label>
                  <input
                    onChange={HandleChange}
                    type="text"
                    name="inComeToRent"
                    value={form.inComeToRent}
                    id="inComeToRent"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="inComeToRent"
                    className="block mb-2 text-sm font-medium text-white dark:text-white"
                  >
                    Image Url
                  </label>
                  <input
                    onChange={HandleChange}
                    type="text"
                    name="image"
                    value={form.image}
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <button
                disabled={loading}
                  type="submit"
                  className="text-white bg-medium-slate-blue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex justify-center"
                >
                  {loading ? <Loader /> : "Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

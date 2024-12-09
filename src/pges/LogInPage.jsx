import React from "react";

const LogInPage = () => {
  return (
    <div className="w-full py-12">
      {/* ======login page warpper==== */}
      <div className="container w-full min-h-[600px] flex items-center">
        <div className="w-7/12 flex items-center justify-center">
          {/* ======divChain===== */}
          {/* ======divChain===== */}
          <div className="w-60 h-60 bg-red-100 flex justify-center items-center">
            <div className="w-52 h-52 bg-red-200 flex justify-center items-center shadow-xl">
              <div className="w-48 h-48 bg-red-300 flex justify-center items-center rotate-45">
                <div className="w-40 h-40 bg-red-400 flex justify-center items-center rotate-45">
                  <div className="w-32 h-32 bg-red-500 flex justify-center items-center rotate-45">
                    <div className="w-26 h-26 bg-red-600 ">
                      <div className="w-20 h-20 bg-red-700">
                        <div className="w-20 h-20 bg-green-800 rounded-full flex justify-center items-center">
                          <div className="w-16 h-16 bg-green-900 rounded-full flex justify-center items-center">
                            <div className="w-12 h-12 bg-yellow-500 rounded-full relative">
                              <div className="circle2 absolute"></div>
                              <div className="circle1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ======divChain===== */}
          {/* ======divChain===== */}
        </div>

        {/* ========login from warpper========== */}
        <div className="w-5/12">
          <h1 className="text-4xl font-inter font-medium mb-3">
            Log in to Exclucive
          </h1>
          <p className="font-popins">Enter your details below</p>
          <form title="form" className="w-full max-w-[372px] mt-8 ">
            {/* -----inputWarpper---- */}
            <div className="flex flex-col gap-5">
              {/* ____email___ */}
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="outline-none border-[1px] border-transparent border-b-2 border-b-DhusorLekhoni w-full py-1"
                />
              </div>
              {/* ____passWord___ */}
              <div>
                <input
                  type="text"
                  placeholder="Password"
                  className="outline-none border-[1px] border-transparent border-b-2 border-b-DhusorLekhoni w-full py-1"
                />
              </div>
              {/* ___submit OR forgot___ */}
              <div className="flex justify-between items-center">
                <button className="bg-Secondary2 px-12 py-4 text-Sada rounded opacity-90 hover:opacity-100">
                  Log in
                </button>
                <span className="text-Secondary2 hover:drop-shadow-md hover:cursor-pointer">
                  Forgot Password?
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;

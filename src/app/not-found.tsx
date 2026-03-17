import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found | Anglican Diocese of Otukpo",
};

const ErrorPage = () => {
  return (
    <section className="relative z-10 bg-white py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[400px] text-center">
              <h2 className="mb-2 text-[50px] font-bold leading-none text-slate-900 sm:text-[80px] md:text-[100px]">
                404
              </h2>
              <h4 className="mb-3 text-[22px] font-semibold leading-tight text-slate-900">
                Oops! Page Not Found
              </h4>
              <p className="mb-8 text-lg text-slate-600">
                The page you are looking for might have been moved or deleted.
              </p>
              <Link
                href="/"
                className="rounded-md bg-blue-900 px-8 py-3 text-base font-semibold text-white transition hover:bg-opacity-90"
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
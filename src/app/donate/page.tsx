import { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Common/Breadcrumb";

export const metadata: Metadata = {
  title: "Support Our Mission | Anglican Diocese of Otukpo",
  description: "Financial giving and bank transfer details for the Diocese of Otukpo and ADODI initiatives.",
};

const DonatePage = () => {
  const bankDetails = [
    { label: "Account Name", value: "Anglican Diocese of Otukpo" },
    { label: "Bank Name", value: "Zenith Bank" },
    { label: "Account Number", value: "1012345678" },
    { label: "Branch", value: "Otukpo Main Branch" },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Support Our Mission"
        pageDescription="Your generosity supports our spiritual ministry and the ADODI humanitarian outreach programs."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div className="rounded-sm bg-white px-8 py-10 shadow-three dark:bg-gray-dark sm:p-[60px]">
                <h3 className="mb-8 text-2xl font-bold text-black dark:text-white sm:text-3xl">
                  Bank Transfer Information
                </h3>
                <p className="mb-10 text-base font-medium text-body-color">
                  Whether you are giving your tithe or supporting an <strong>ADODI Project</strong> (such as IDP relief or borehole construction), please use the details below. 
                  <span className="block mt-2 text-sm italic">Note: For specific project tracking, please include the project name in your transfer narration.</span>
                </p>

                {/* Bank Details Table */}
                <div className="overflow-hidden rounded-lg border border-stroke dark:border-white/10">
                  <table className="w-full text-left">
                    <tbody>
                      {bankDetails.map((detail, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-stroke last:border-0 dark:border-white/10"
                        >
                          <td className="px-6 py-4 font-semibold text-black dark:text-white bg-gray-light/30 dark:bg-white/5 w-1/3">
                            {detail.label}
                          </td>
                          <td className="px-6 py-4 text-body-color">
                            {detail.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-10 rounded-sm bg-primary/5 p-8 border-l-4 border-primary">
                  <h4 className="mb-3 text-lg font-semibold text-black dark:text-white">
                    Our Biblical Call to Give
                  </h4>
                  <p className="text-base italic text-body-color mb-4">
                    &quot;For I was hungry and you gave me something to eat, I was thirsty and you gave me something to drink, I was a stranger and you invited me in...&quot; 
                    — Matthew 25:35
                  </p>
                  <p className="text-sm text-body-color">
                    Your support helps ADODI bring healing to broken lives and restore communities.
                  </p>
                </div>
              </div>
            </div>

            {/* Side Info / Other Ways to Give */}
            <div className="w-full px-4 lg:w-4/12">
              <div className="mb-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark">
                <h3 className="mb-6 border-b border-stroke pb-4 text-xl font-bold text-black dark:text-white">
                  How You Can Help
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start text-body-color">
                    <span className="mr-3 mt-1 text-primary">✓</span>
                    <span><strong>Donations</strong> – Feeding and sheltering the distressed.</span>
                  </li>
                  <li className="flex items-start text-body-color">
                    <span className="mr-3 mt-1 text-primary">✓</span>
                    <span><strong>Project Support</strong> – Funding boreholes and schools.</span>
                  </li>
                  <li className="flex items-start text-body-color">
                    <span className="mr-3 mt-1 text-primary">✓</span>
                    <span><strong>In-Kind</strong> – Food or materials for IDP camps.</span>
                  </li>
                </ul>
              </div>
              
              <Link
                href="/contact"
                className="flex w-full items-center justify-center rounded-sm bg-blue-900 px-8 py-4 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-800 shadow-lg"
              >
                Inquire About ADODI Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonatePage;
import Image from "next/image";

const ADODISection = () => {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          
          {/* Image / Icon Side */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0">
              {/* Replace with an actual image of the Bishop or the Cathedral later */}
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-primary/5 border-2 border-dashed border-primary/20">
                 <span className="text-primary font-bold text-xl px-10">
                   [Insert Diocesan Image or Bishop's Portrait]
                 </span>
              </div>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Vision & Mission
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  The Anglican Diocese of Otukpo is committed to the holistic 
                  proclamation of the Gospel of Jesus Christ. We seek to transform 
                  lives through spiritual growth, education, and social welfare 
                  programs across our community.
                </p>
              </div>

              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Our Core Pillars
                </h3>
                <ul className="list-inside list-none space-y-3">
                  <li className="flex items-center text-base font-medium text-body-color">
                    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary text-white text-xs">
                      1
                    </span>
                    Evangelism & Discipleship
                  </li>
                  <li className="flex items-center text-base font-medium text-body-color">
                    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary text-white text-xs">
                      2
                    </span>
                    Community Development
                  </li>
                  <li className="flex items-center text-base font-medium text-body-color">
                    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-primary text-white text-xs">
                      3
                    </span>
                    Education & Youth Empowerment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ADODISection;
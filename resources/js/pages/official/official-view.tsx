import PageHeader from "@/components/ext/page-header";
import { Badge, Contact, Home, IdCard, Ruler, User } from "lucide-react";

export default function OfficialView(){
    return (
        <>
         <PageHeader title="Register Official">
        
        
                </PageHeader>
             
     
      
         
            {/* <!-- Profile Content Canvas --> */}
            <div class=" space-y-8 max-w-7xl mx-auto w-full">
                {/* <!-- Profile Header --> */}
                  <section
                        class="bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col md:flex-row shadow-sm border border-outline-variant/10">
                        <div class="w-full md:w-64 h-64 md:h-auto overflow-hidden">
                              <img alt="Profile Photo" class="w-full h-full object-cover"
                                    src="/images/officials/TNOFFC444.jpg" />
                        </div>
                        <div class="flex-1 p-8 flex flex-col justify-center">
                              <p class="text-secondary font-label font-bold text-xs uppercase tracking-widest mb-1">
                                    Official Registry ID: #TNOFFC444</p>
                              <h2 class="text-4xl font-display font-extrabold text-primary tracking-tighter mb-2">
                                    Venkatesh</h2>
                              <div class="flex items-center gap-4 mt-4">
                                    <span class="bg-primary text-white px-4 py-1.5 rounded-3xl text-sm font-bold">State Official</span>
                                    <span class="flex items-center gap-1.5">
                                          <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                          <span class="text-xs font-bold text-on-surface">Active </span>
                                    </span>
                              </div>
                        </div>
                  </section>
                  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* <!-- Left Column: Personal & Contact --> */}
                        <div class="lg:col-span-8 space-y-8">
                              {/* <!-- Personal Information --> */}
                              <section
                                    class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
                                    <h3
                                          class="font-headline font-bold text-primary uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                                         <User /> Personal
                                          Information
                                    </h3>
                                    <div class="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Full Name</p>
                                                <p class="text-on-surface font-medium">Venkatesh</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Father's Name</p>
                                                <p class="text-on-surface font-medium">SANKARAN</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Date of Birth</p>
                                                <p class="text-on-surface font-medium">Oct 22, 1964</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Gender</p>
                                                <p class="text-on-surface font-medium">Male</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Blood Group</p>
                                                <p class="text-on-surface font-medium">A+ </p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Marital Status</p>
                                                <p class="text-on-surface font-medium">Married</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Marriage Date</p>
                                                <p class="text-on-surface font-medium">May 19, 1996</p>
                                          </div>
                                    </div>
                              </section>
                              {/* <!-- Physical Attributes --> */}
                              <section
                                    class="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
                                    <h3
                                          class="font-headline font-bold text-primary uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                                          <Ruler /> Physical
                                          Attributes
                                    </h3>
                                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Height</p>
                                                <p class="text-on-surface font-medium">166 cm</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Weight</p>
                                                <p class="text-on-surface font-medium">70 kg</p>
                                          </div>
                                    </div>
                              </section>
                              {/* <!-- Address Details --> */}
                              <section
                                    className=" p-8 rounded-xl shadow-sm border border-outline-variant/10">
                                    <h3
                                          className="font-headline font-bold text-primary uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                                         <Home />
                                         Address &amp;
                                          Location
                                    </h3>  
                                    <div className="space-y-6">
                                          <div>
                                                <p
                                                      className="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Address</p>
                                                <p className="text-on-surface font-medium">#19,3B Quanta Ranjini Apartments, Rajarathinam Street, Kilpauk</p>
                                          </div>
                                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div>
                                                      <p
                                                            className="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                            District</p>
                                                      <p className="text-on-surface font-medium">Chennai</p>
                                                </div>
                                                <div>
                                                      <p
                                                            className="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                            State</p>
                                                      <p className="text-on-surface font-medium">Tamil Nadu</p>
                                                </div>
                                                <div>                                                      <p
                                                            className="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                            Post Code</p>
                                                      <p className="text-on-surface font-medium">
600010
</p>
                                                </div>
                                          </div>
                                    </div>
                              </section>
                        </div>
                        {/* <!-- Right Column: Official & Contact --> */}
                        <div class="lg:col-span-4 space-y-8">
                              {/* <!-- Contact Info --> */}
                              <section
                                    class="bg-surface-container-low p-6 rounded-xl border-l-4 border-secondary shadow-sm">
                                    <h3
                                          class="font-headline font-bold text-primary uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                                        <Contact />
                                          Details
                                   </h3>
                                    <div class="space-y-4">
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Primary Contact</p>
                                                <p class="text-on-surface font-bold">+91 94440 66655</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Emergency Contact</p>
                                                <p class="text-on-surface font-medium">+91 94450 92894</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Email Address</p>
                                                <p class="text-primary font-bold">tnbachennai@yahoo.co.in</p>
                                          </div>
                                    </div>
                              </section>
                              {/* <!-- Official Identification --> */}
                              <section
                                    class="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                                    <h3
                                          class="font-headline font-bold text-primary uppercase text-xs tracking-widest mb-6 flex items-center gap-2">
                                          <IdCard />
                                          Official Details
                                    </h3>
                                    <div class="space-y-4">
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Position</p>
                                                <p class="text-on-surface font-bold">State Official</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Aadhar / National ID</p>
                                                <p class="text-on-surface font-medium">9676-2727-1715</p>
                                          </div>
                                          <div>
                                                <p
                                                      class="text-[10px] font-label font-bold uppercase text-on-surface-variant opacity-60">
                                                      Passport Number</p>
                                                <p class="text-on-surface font-medium">J0853784</p>
                                          </div>
                                    </div>
                              </section>
                        </div>
                  </div>
            </div>
          
   
        </>
    )
}
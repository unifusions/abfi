import FormInput from "@/components/ext/form-input"
import { create, index } from "@/routes/players"
import { ClipboardCheck, Save, User } from "lucide-react"

export default function PlayerCreate() {
    return (
        <>
            <div className="flex h-full   flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">

                <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        {/* <nav className="flex items-center gap-2   mb-2">
                            <span className="text-xs font-label uppercase tracking-widest">Registry</span>
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                            <span className="text-xs font-label uppercase tracking-widest">Players</span>
                        </nav> */}
                        <h1 className="font-headline text-4xl font-black text-primary tracking-tight">Register New Player</h1>
                        <p className="text-on-surface-variant mt-2 max-w-lg">Complete the official registration form to add a player to the national database for the 2024/25 season.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-2 border border-outline  font-semibold rounded-md hover:bg-surface-variant transition-colors underline-offset-4 hover:underline">Cancel</button>
                        <button className="px-8 py-2 bg-primary text-white font-bold rounded-md shadow-lg active:scale-95 transition-all">
                            <Save className="h-5 mr-2" /> <span>Save Player</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Form Canvas (Bento Grid Style for Sections) --> */}
                <form className="  grid grid-cols-1 md:grid-cols-12 gap-6">

                    <section className=" md:col-span-8   p-8 relative overflow-hidden group">

                        <div className="absolute left-0 top-0 w-1 h-full bg-secondary"></div>
                        <header className="mb-8 flex items-center justify-between">
                            <div>
                                <h2 className="font-display font-headline text-xl font-bold text-primary">Personal Identity</h2>
                                <p className="text-sm text-on-surface-variant">Legal name as it appears on birth certificate</p>
                            </div>
                            <User className="text-secondary opacity-20 group-hover:opacity-100 transition-opacity" />

                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Legal Full Name"
                                    id="full_name"
                                    name="full_name"
                                    placeholder="e.g., Juan Rivera"
                                    onChange={(e) => console.log(e.target.value)}

                                />

                            </div>
                            <div className="flex flex-col gap-1.5">

                                <FormInput
                                    label="Father's / Guardian Name"
                                    id="guardian_name"
                                    name="guardian_name"
                                    placeholder="e.g., Juan Rivera"

                                />
                            </div>
                            <div class="flex flex-col gap-1.5">


                                <FormInput
                                    label="Date of birth"
                                    id="date_of_birth"
                                    name="date_of_birth"
                                    type="date"


                                />



                            </div>
                            <div class="flex flex-col gap-1.5">
                                <label class="text-xs font-label uppercase font-bold tracking-widest text-primary">Gender</label>
                                <select class="input-field bg-surface-container-low border-0 p-3 rounded-lg text-on-surface">
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Non-binary</option>
                                    <option>Prefer not to say</option>
                                </select>
                            </div>

                          

                        </div>
                    </section>
                    {/* <!-- Section 2: Player Stats / Quick View --> */}
                    <section className="md:col-span-4 bg-primary text-white p-8 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <h3 className="text-xs font-label uppercase tracking-widest text-on-primary-container mb-4">Registration Status</h3>
                            <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl border border-white/10">
                                <ClipboardCheck />
                                <div>
                                    <p className="text-sm font-bold">Awaiting Documents</p>
                                    <p className="text-xs opacity-60">ID Verification Required</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 relative z-10">
                            <h3 className="text-xs font-label uppercase tracking-widest text-on-primary-container mb-2">Age Class</h3>
                            <p className="font-headline text-5xl font-black tracking-tighter">U14</p>
                            <p className="text-xs opacity-60 mt-2">Determined by DOB </p>
                        </div>
                        {/* <!-- Subtle Decorative Element --> */}
                        <div className="absolute -right-12 -bottom-12 opacity-10 pointer-events-none">
                            <span className="material-symbols-outlined"
                            // style="font-size: 160px;"
                            >sports_baseball</span>
                        </div>
                    </section>

                     <section className="md:col-span-12 bg-surface-container-lowest p-8 relative overflow-hidden">
                        <div className="absolute left-0 top-0 w-1 h-full bg-primary"></div>
                        <header className="mb-8">
                            <h2 className="font-headline text-xl font-bold text-primary">Player Details</h2>
                          
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="flex flex-col gap-1.5">

                              
   <label class="text-xs font-label uppercase font-bold tracking-widest text-primary">Position</label>
                                <select class="  bg-surface-container-low border-0 p-3 rounded-lg text-on-surface" >
                                    <option>Pitcher</option>
                                    <option>Catcher</option>
                                    <option>First Baseman</option>
                                    <option>Second Baseman</option>
                                    <option>Third Baseman</option>
                                    <option>Shortstop</option>
                                    <option>Left Fielder</option>
                                    <option>Center Fielder</option>
                                    <option>Right Fielder</option>

                                </select>

                            </div>
                            <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Height"
                                    id="height"
                                    name="height"
                                    placeholder="e.g., 5'10&quot;"
                                    type="text"
                                />

                            </div>

                            <div className="flex flex-col gap-1.5">
                                 <FormInput
                                    label="Weight"
                                    id="weight"
                                    name="weight"
                                    placeholder="e.g., 180 lbs"
                                    type="text"
                                />

                            </div>

                            <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Blood Group"
                                    id="blood_group"
                                    name="blood_group"
                                    placeholder="e.g., O+"
                                    type="text"
                                />

                            </div>

                             <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Aadhar Number"
                                    id="aadhar_number"
                                    name="aadhar_number"
                                    placeholder="1234 5678 9012"
                                    type="text"
                                />

                            </div>

                            <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Passport Number"
                                    id="passport_number"
                                    name="passport_number"
                                    placeholder="12345678"
                                    type="text"
                                />

                            </div>

                            <div class="flex flex-col gap-1.5">
                             
                            </div>
                        </div>
                    </section>

                    {/* <!-- Section 3: Contact Info --> */}
                    <section className="md:col-span-12 bg-surface-container-lowest p-8 relative overflow-hidden">
                        <div className="absolute left-0 top-0 w-1 h-full bg-primary"></div>
                        <header className="mb-8">
                            <h2 className="font-headline text-xl font-bold text-primary">Contact &amp; Assignment</h2>
                            <p className="text-sm text-on-surface-variant">Primary guardian contact and team placement</p>
                        </header>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                           
                            <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Phone Number"
                                    id="phone_number"
                                    name="phone_number"
                                    placeholder="(555) 000-0000"
                                    type="tel"
                                />

                            </div>

                              <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Emergency Contact Number"
                                    id="emergency_phone_number"
                                    name="emergency_phone_number"
                                    placeholder="(555) 000-0000"
                                    type="tel"
                                />

                            </div>
 <div className="flex flex-col gap-1.5">

                                <FormInput
                                    label="Email Address"
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="contact@domain.com"
                                />


                            </div>
                            <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Address"
                                    id="address"
                                    name="address"
                                    placeholder="123 Main St"
                                    type="text"
                                />

                            </div>

                            <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="District / City"
                                    id="district_city"
                                    name="district_city"
                                    placeholder="New Delhi "
                                    type="text"
                                />

                            </div>

                             <div className="flex flex-col gap-1.5">
                                <FormInput
                                    label="Postal  Code"
                                    id="postal_code"
                                    name="postal_code"
                                    placeholder="110001"
                                    type="text"
                                />

                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label class="text-xs font-label uppercase font-bold tracking-widest text-primary">Current Team</label>
                                <select class="input-field bg-surface-container-low border-0 p-3 rounded-lg text-on-surface" >
                                    <option>Select a Team</option>
                                    <option>Mid-City Lions</option>
                                    <option>Valley Blue Jays</option>
                                    <option>River Park Dodgers</option>
                                    <option>Northside Tigers</option>
                                </select>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Section 4: Document Uploads --> */}
                    <section class="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* <!-- Birth Certificate --> */}
                        <div class="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/15 hover:border-secondary/30 transition-all cursor-pointer">
                            <div class="flex items-center justify-between">
                                <h4 class="text-xs font-label uppercase font-black text-primary tracking-widest">Birth Certificate</h4>
                                <span class="material-symbols-outlined text-on-surface-variant">upload_file</span>
                            </div>
                            <div class="h-32 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center gap-2 group hover:bg-surface-container-high transition-colors">
                                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors">add_circle</span>
                                <p class="text-xs font-medium text-on-surface-variant">Click or drag PDF/JPG</p>
                            </div>
                        </div>
                        {/* <!-- Medical Waiver --> */}
                        <div class="bg-surface-container-low p-6 flex flex-col gap-4 border border-outline-variant/15 hover:border-secondary/30 transition-all cursor-pointer">
                            <div class="flex items-center justify-between">
                                <h4 class="text-xs font-label uppercase font-black text-primary tracking-widest">Medical Waiver</h4>
                                <span class="material-symbols-outlined text-on-surface-variant">medical_services</span>
                            </div>
                            <div class="h-32 border-2 border-dashed border-outline-variant rounded-xl flex flex-col items-center justify-center gap-2 group hover:bg-surface-container-high transition-colors">
                                <span class="material-symbols-outlined text-on-surface-variant group-hover:text-secondary transition-colors">add_circle</span>
                                <p class="text-xs font-medium text-on-surface-variant">Click or drag Signed Waiver</p>
                            </div>
                        </div>
                    </section>
                    {/* <!-- Submit row for mobile sticky or bottom alignment --> */}
                    <div class="md:col-span-12 flex items-center justify-end gap-4 py-8 border-t border-outline-variant/10">
                        <button class="px-6 py-2 text-on-surface-variant font-medium hover:text-primary transition-colors" type="button">Discard Draft</button>
                        <button class="px-10 py-3 bg-secondary text-white font-bold rounded-md shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2" type="submit">
                            <Save className="h-5" /> Finalize Registration
                             
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

PlayerCreate.layout = {
    breadcrumbs: [
{title : 'Players', href: index()},
        { title: 'Add Player', href: create() },
    ],

}
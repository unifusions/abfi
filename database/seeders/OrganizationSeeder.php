<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrganizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $orgs = [
            ['name' => 'Assam Baseball Association', 'phone' => '9435089530', 'email' => 'ashma5asm@yahoo.co.in', 'president' => 'Dr.Nazrul Islam', 'secretary' => 'Ms. Ashma Begum'],
            ['name' => 'Andhra Pradesh Baseball Association', 'phone' => '9440843022', 'email' => 'andhrapradeshbaseball2018@gmail.com', 'president' => 'Mr. L. Pavan Kumar Reddy', 'secretary' => 'Mr. S. Mallikarjun Reddy'],

            ['name' => 'Baseball Association of Bihar', 'president' => 'Mr. Promod Sharma', 'secretary' => 'Mr. Ajay Sharma', 'phone' => '9334079252', 'email' => 'ansbca@gmail.com'],
            ['name' => 'Baseball Association Chandigarh', 'president' => 'Mr. Jaspal Singh', 'secretary' => 'Mr. Kiran Rampal', 'phone' => '9466077399', 'email' => 'kiranramp@gmail.com'],
            ['name' => 'Chhattisgarh Baseball Association', 'president' => 'Mr. Shailesh Pandey', 'secretary' => 'Ms. Mitali Ghosh', 'phone' => '9827153028', 'email' => 'cgabaseball@gmail.com'],
            ['name' => 'Baseball Association Delhi', 'president' => 'Dr. Bhagat Singh', 'secretary' => 'Mr. Virender Bhardwaj', 'phone' => '9891489459', 'email' => 'abfibaseball@yahoo.co.in'],
            ['name' => 'Amateur Baseball Federation of Goa', 'president' => 'Mr. Ramakant S. Angle', 'secretary' => 'Minanath Upathaye', 'phone' => '9822100651', 'email' => 'ramakantangle@rediffmail.com'],
            ['name' => 'Gujrat State Baseball Association', 'president' => 'Mr. Mahesh Kasvala', 'secretary' => 'Mr. J.K Khodadhra', 'phone' => '9327050344', 'email' => 'jkkhodadhra@yahoo.com'],
            ['name' => 'H.P. Baseball Association', 'president' => 'Dr. Sudhir Mohindru', 'secretary' => '', 'phone' => '9816030191', 'email' => 'sudhirmohindru@gmail.com'],
            ['name' => 'Haryana Baseball Association', 'president' => 'Mr. Dharambir Singh', 'secretary' => 'Mr. Arvind Kumar', 'phone' => '9813172041', 'email' => 'balharaharsh@gmail.com'],
            ['name' => 'Jammu & Kashmir Baseball Association', 'president' => 'Mr. Raju Sharma', 'secretary' => 'Mr. Farooq Ahmad', 'phone' => '9596337442', 'email' => 'jkbaseballassociation@gmail.com'],
            ['name' => 'Jharkhand Baseball Association', 'president' => 'Mr. Jai Kumar Sinha', 'secretary' => 'Mr. Bijay Shankar Singh', 'phone' => '9934395196', 'email' => 'v528913@gmail.com'],
            ['name' => 'Kerala Baseball Association', 'president' => 'Mr. M. N. Krishnamurthy', 'secretary' => 'Anand Lal TP', 'phone' => '9856076113', 'email' => 'baseballkerala@gmail.com'],
            ['name' => 'Baseball Association of Karnataka', 'president' => 'Mr. Ashok Patan', 'secretary' => 'Mr. Anil Ram Chandra', 'phone' => '9449708776', 'email' => 'kbaseball@gmail.com'],
            ['name' => 'Manipur Baseball Association', 'president' => 'Mr. T. B. Singh', 'secretary' => 'Mr. Indukiran Singh', 'phone' => '9856088366', 'email' => 'achomindu@yahoo.com'],
            ['name' => 'M.P.A. Baseball Association', 'president' => 'Mrs. Malini Gaud', 'secretary' => 'Mr. Jasraj Mehta', 'phone' => '9425054865', 'email' => 'meprakash22@yahoo.co.in'],
            ['name' => 'Maharashtra Baseball Association', 'president' => 'Mr. Jitendra Ahawad', 'secretary' => 'Mr. Rajendra Ikhankar', 'phone' => '9833321882', 'email' => 'rikhankar@yahoo.com'],
            ['name' => 'Baseball Association of Odisha', 'president' => 'Mr. Vijay Khandelwal', 'secretary' => 'Mr. S.N. Pradhan', 'phone' => '9437025780', 'email' => 'pradhansibananda@yahoo.com'],

            ['name' => 'Punjab Baseball Association', 'president' => 'Mr. S.Sukhdev Singh Aulakh', 'secretary' => 'Mr. Harbir Singh Gill', 'phone' => '9815337030', 'email' => 'Punjabstatebaseballassociation@gmail.com'],
            ['name' => 'Amateur Baseball Association of Pondicherry', 'president' => 'Mr. P. Naryana Swami', 'secretary' => 'Mr. V. Ilangovane', 'phone' => '0413-357829', 'email' => 'elanko79@gmail.com'],
            ['name' => 'Rajasthan Baseball Association', 'president' => 'Ashok Kumar Sharma', 'secretary' => 'Omprakash Mahala', 'phone' => '9672737888', 'email' => 'opmahala0364@gmail.com'],
            ['name' => 'Tamilnadu Baseball Association', 'president' => '', 'secretary' => 'Mr. S. Venkat', 'phone' => '9444066655', 'email' => 'tnba.chennai@yahoo.co.in'],
            ['name' => 'Baseball Association of Telangana', 'president' => 'T Nitesh Reddy', 'secretary' => 'Ms. Shweta', 'phone' => '9899599088', 'email' => 'baseballtelangana@gmail.com'],
            ['name' => 'Uttrakhand Baseball Association', 'president' => 'Mr. Vimal Harnal', 'secretary' => 'Mr. Satish Anand', 'phone' => '9837187602', 'email' => 'satishanand54@gmail.com'],
            ['name' => 'U.P State Baseball Association', 'president' => 'Dr. D. R. Yadav', 'secretary' => 'Mr. Dinesh Yadav', 'phone' => '9412223344', 'email' => 'mdvedantgroups@gmail.com'],
            ['name' => 'Bengal Baseball Association', 'president' => 'Mr. Ajoy Ghosh', 'secretary' => 'Mr. Ashis Bardhan', 'phone' => '9831128271', 'email' => 'jaharmumdas@hotmail.com'],



        ];
    }
}

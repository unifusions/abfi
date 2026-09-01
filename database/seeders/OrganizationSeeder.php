<?php

namespace Database\Seeders;

use App\Domains\Organization\Models\Organization;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class OrganizationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $orgs = [
            [
                'name' => 'Assam Baseball Association',
                'address_line_1' => "C/o Sultana Rahman, Rahman Building (2nd flr)",
                'address_line_2' => "Opp. Rihno Club, Asram Road South Sarania, Ulubari, Guwahati",
                'state_id' => 3,
                'phone' => '9435089530',
                'email' => 'ashma5asm@yahoo.co.in',
                'president' => 'Dr.Nazrul Islam',
                'secretary' => 'Ms. Ashma Begum'
            ],

            [
                'name' => 'Andhra Pradesh Baseball Association',
                'address_line_1' => "F. No. 305,,uniteflora apartment,",
                'address_line_2' => "j. K. Colony, Gandhinagar, Nellore - 524004",
                'state_id' => 1,
                'phone' => '9440843022',
                'email' => 'andhrapradeshbaseball2018@gmail.com',
                'president' => 'Mr. L. Pavan Kumar Reddy',
                'secretary' => 'Mr. S. Mallikarjun Reddy'
            ],

            [
                'name' => 'Baseball Association of Bihar',
                'address_line_1' => 'Guru Niwas, Kun kun Singh lane,',
                'address_line_2' => 'Patna 800006',
                'state_id' => 4,
                'president' => 'Mr. Promod Sharma',
                'secretary' => 'Mr. Ajay Sharma',
                'phone' => '9334079252',
                'email' => 'ansbca@gmail.com'
            ],

            [
                'name' => 'Baseball Association Chandigarh',
                'address_line_1' => 'H.No.923,Sector - 7, Chandigarh.',
                'address_line_2' => '',
                'state_id' => 30,
                'president' => 'Mr. Jaspal Singh',
                'secretary' => 'Mr. Kiran Rampal',
                'phone' => '9466077399',
                'email' => 'kiranramp@gmail.com'
            ],
            [
                'name' => 'Chhattisgarh Baseball Association',
                'address_line_1' => 'H.No. 243 Ward No.-38Hemu Nagar,',
                'address_line_2' => 'Bilaspur,',
                'state_id' => 5,
                'president' => 'Mr. Shailesh Pandey',
                'secretary' => 'Ms. Mitali Ghosh',
                'phone' => '9827153028',
                'email' => 'cgabaseball@gmail.com'
            ],

            [
                'name' => 'Baseball Association Delhi',
                'address_line_1' => 'B-IV/317B, Keshav Puram,',
                'address_line_2' => 'New Delhi-110035.',
                'state_id' => 32,
                'president' => 'Dr. Bhagat Singh',
                'secretary' => 'Mr. Virender Bhardwaj',
                'phone' => '9891489459',
                'email' => 'abfibaseball@yahoo.co.in'
            ],
            [
                'name' => 'Amateur Baseball Federation of Goa',
                'address_line_1' => '2, Durga Apartments,Luis Miranda Road,',
                'address_line_2' => 'Margao - 403601.',
                'state_id' => 6,
                'president' => 'Mr. Ramakant S. Angle',
                'secretary' => 'Minanath Upathaye',
                'phone' => '9822100651',
                'email' => 'ramakantangle@rediffmail.com'
            ],
            [
                'name' => 'Gujrat State Baseball Association',
                'address_line_1' => '818/331, Laxmi Pura,O/S Raipur Gate,',
                'address_line_2' => 'Near Ankur Mills,Ahemdabad - 380002',
                'state_id' => 7,
                'president' => 'Mr. Mahesh Kasvala',
                'secretary' => 'Mr. J.K Khodadhra',
                'phone' => '9327050344',
                'email' => 'jkkhodadhra@yahoo.com'
            ],
            [
                'name' => 'H.P. Baseball Association',
                'address_line_1' => 'Saroj Hosiery, Chamba Ghat, Solan - 173213',
                'address_line_2' => '',
                'state_id' => 9,
                'president' => 'Dr. Sudhir Mohindru',
                'secretary' => '',
                'phone' => '9816030191',
                'email' => 'sudhirmohindru@gmail.com'
            ],
            [
                'name' => 'Haryana Baseball Association',
                'address_line_1' => 'Opposite 191-L, Model Town,Rohtak-124001.',
                'address_line_2' => '',
                'state_id' => 8,
                'president' => 'Mr. Dharambir Singh',
                'secretary' => 'Mr. Arvind Kumar',
                'phone' => '9813172041',
                'email' => 'balharaharsh@gmail.com'
            ],
            [
                'name' => 'Jammu & Kashmir Baseball Association',
                'address_line_1' => 'Near Ziyarat Shareef Awantipora, ',
                'address_line_2' => 'Pulwama, Kashmir - 192122',
                'state_id' => 33,
                'president' => 'Mr. Raju Sharma',
                'secretary' => 'Mr. Farooq Ahmad',
                'phone' => '9596337442',
                'email' => 'jkbaseballassociation@gmail.com'
            ],
            [
                'name' => 'Jharkhand Baseball Association',
                'address_line_1' => 'R. M. C. H. Bariatu Birsa Blood Bank,Ranchi - 834009',
                'address_line_2' => '',
                'state_id' => 10,
                'president' => 'Mr. Jai Kumar Sinha',
                'secretary' => 'Mr. Bijay Shankar Singh',
                'phone' => '9934395196',
                'email' => 'v528913@gmail.com'
            ],
            [
                'name' => 'Kerala Baseball Association',
                'address_line_1' => '"Taas" TC 7/168/1, Karithodu Lane,',
                'address_line_2' => 'Kanji Ram Para P.O. Thirvanthapuram - 950030.',
                'state_id' => 12,
                'president' => 'Mr. M. N. Krishnamurthy',
                'secretary' => 'Anand Lal TP',
                'phone' => '9856076113',
                'email' => 'baseballkerala@gmail.com'
            ],
            [
                'name' => 'Baseball Association of Karnataka',
                'address_line_1' => 'Mpee Enterprises, Sujata Complex,2nd Floor,',
                'address_line_2' => '1-Main Gandhi Nagar, Bangalore-560007',
                'state_id' => 11,
                'president' => 'Mr. Ashok Patan',
                'secretary' => 'Mr. Anil Ram Chandra',
                'phone' => '9449708776',
                'email' => 'kbaseball@gmail.com'
            ],
            [
                'name' => 'Manipur Baseball Association',
                'address_line_1' => 'Yaiskul, Jamnasthan,Leikai, Imphal-795001.',
                'address_line_2' => '',
                'state_id' => 15,
                'president' => 'Mr. T. B. Singh',
                'secretary' => 'Mr. Indukiran Singh',
                'phone' => '9856088366',
                'email' => 'achomindu@yahoo.com'
            ],
            [
                'name' => 'M.P.A. Baseball Association',
                'address_line_1' => '42, Shankar Bagh Colony, Near Mari Mata Chowk,',
                'address_line_2' => 'Indore - 452002.',
                'state_id' => 13,
                'president' => 'Mrs. Malini Gaud',
                'secretary' => 'Mr. Jasraj Mehta',
                'phone' => '9425054865',
                'email' => 'meprakash22@yahoo.co.in'
            ],
            [
                'name' => 'Maharashtra Baseball Association',
                'address_line_1' => '6,Sangvi Chawl, New Maneklal Estet, Mehata Road',
                'address_line_2' => 'Near Dattamandir, Ghatkopar (west), Mumbai 400086.',
                'state_id' => 14,
                'president' => 'Mr. Jitendra Ahawad',
                'secretary' => 'Mr. Rajendra Ikhankar',
                'phone' => '9833321882',
                'email' => 'rikhankar@yahoo.com'
            ],
            [
                'name' => 'Baseball Association of Odisha',
                'address_line_1' => 'Telenga Bazar,Cuttack - 753009',
                'address_line_2' => '',
                'state_id' => 19,
                'president' => 'Mr. Vijay Khandelwal',
                'secretary' => 'Mr. S.N. Pradhan',
                'phone' => '9437025780',
                'email' => 'pradhansibananda@yahoo.com'
            ],

            [
                'name' => 'Punjab Baseball Association',
                'address_line_1' => '180 Atam Nagar, Ludhiana - 141002',
                'address_line_2' => '',
                'state_id' => 20,
                'president' => 'Mr. S.Sukhdev Singh Aulakh',
                'secretary' => 'Mr. Harbir Singh Gill',
                'phone' => '9815337030',
                'email' => 'Punjabstatebaseballassociation@gmail.com'
            ],
            [
                'name' => 'Amateur Baseball Association of Pondicherry',
                'address_line_1' => 'No. 12 First Cross, Kolas Nagar,',
                'address_line_2' => 'Pondicherry - 605001',
                'state_id' => 36,
                'president' => 'Mr. P. Naryana Swami',
                'secretary' => 'Mr. V. Ilangovane',
                'phone' => '0413-357829',
                'email' => 'elanko79@gmail.com'
            ],
            [
                'name' => 'Rajasthan Baseball Association',
                'address_line_1' => 'Odd. Bus dept. near Gulab AAta Chaki,',
                'address_line_2' => ' Ward no 44, Devipura Sikar Distic',
                'state_id' => 21,
                'president' => 'Ashok Kumar Sharma',
                'secretary' => 'Omprakash Mahala',
                'phone' => '9672737888',
                'email' => 'opmahala0364@gmail.com'
            ],
            [
                'name' => 'Tamilnadu Baseball Association',
                'address_line_1' => 'No: 19, 3B, Quanta Ranjini apartments,',
                'address_line_2' => 'Rajarathinam Street, Kilpauk, Chennai - 600010',
                'state_id' => 23,
                'president' => '',
                'secretary' => 'Mr. S. Venkat',
                'phone' => '9444066655',
                'email' => 'tnba.chennai@yahoo.co.in'
            ],
            [
                'name' => 'Baseball Association of Telangana',
                'address_line_1' => '103 - Dhanni Apt. 17-1-388/5/B&c Beside BSNL Office,',
                'address_line_2' => 'Laxmi Nagar, Saidabad Hyderabad-500059',
                'state_id' => 24,
                'president' => 'T Nitesh Reddy',
                'secretary' => 'Ms. Shweta',
                'phone' => '9899599088',
                'email' => 'baseballtelangana@gmail.com'
            ],
            [
                'name' => 'Uttrakhand Baseball Association',
                'address_line_1' => '',
                'address_line_2' => '',
                'state_id' => 27,
                'president' => 'Mr. Vimal Harnal',
                'secretary' => 'Mr. Satish Anand',
                'phone' => '9837187602',
                'email' => 'satishanand54@gmail.com'
            ],
            [
                'name' => 'U.P State Baseball Association',
                'address_line_1' => 'Vedant College of Education,',
                'address_line_2' => 'Garhmukteshwar, Ghaziabad.',
                'state_id' => 26,
                'president' => 'Dr. D. R. Yadav',
                'secretary' => 'Mr. Dinesh Yadav',
                'phone' => '9412223344',
                'email' => 'mdvedantgroups@gmail.com'
            ],
            [
                'name' => 'Bengal Baseball Association',
                'address_line_1' => '11/11 Kalicharan Ghosh Road,',
                'address_line_2' => 'Kolkata - 700050',
                'state_id' => 28,
                'president' => 'Mr. Ajoy Ghosh',
                'secretary' => 'Mr. Ashis Bardhan',
                'phone' => '9831128271',
                'email' => 'jaharmumdas@hotmail.com'
            ],

        ];

        foreach ($orgs as $org) {
            Organization::create(
                [
                    'id' => Str::uuid(),
                    ...$org
                ]
            );
        }
    }
}

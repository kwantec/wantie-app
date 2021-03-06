


function processCategories(response)
{
	
	var Category = Parse.Object.extend("Category");
	var query = new Parse.Query(Category);
	query.ascending("name");

	var catList = { categories:[] };

	query.find({
		success: function(matchesWants) {
			
			for(i = 0;i < matchesWants.length; i++)
			{
				catList.categories.push( matchesWants[i].get("name") );
			}
			response.success( catList  );
		}
	});
	
};

exports.init = function(request, response) {
	
	var Category = Parse.Object.extend("Category");
	
	var allCats = [
'Home/Air Duct Cleaning',
'Home/Alarms',
'Home/Animal Removal',
'Home/Apartments',
'Home/Appliance Refinishing',
'Home/Appliance Repair - Large',
'Home/Appliance Repair - Small',
'Home/Appraisals - Real Estate',
'Home/Architects & Building Design',
'Home/Asbestos Removal',
'Home/Auction Services',
'Home/Awnings',
'Home/Basement Waterproofing',
'Home/Bathtub Refinishing & Liners',
'Home/Builders - Garages-Barns-Sheds',
'Home/Builders - Homes',
'Home/Cabinet Making',
'Home/Cabinet Refacing-Restoration',
'Home/Carpentry - Unfinished',
'Home/Carpentry - Woodworking',
'Home/Carpet Sales-Installation-Repair',
'Home/Ceiling Fans',
'Home/Central Vacuum Cleaning',
'Home/Ceramic Tile',
'Home/Chimney Caps',
'Home/Chimney Repair',
'Home/Chimney Sweep',
'Home/Closets',
'Home/Concrete - Leveling-Mudjacking',
'Home/Concrete - Pouring & Repair',
'Home/Concrete - Stamped & Decorative',
'Home/Countertops',
'Home/Deck Maintenance',
'Home/Decks & Porches',
'Home/Doors',
'Home/Drain Pipe Installation - Exterior',
'Home/Driveways - Asphalt',
'Home/Driveways - Concrete',
'Home/Drywall',
'Home/Electrical',
'Home/Energy Efficiency Auditing',
'Home/Epoxy Flooring',
'Home/Excavating',
'Home/Fencing',
'Home/Fencing & Driveway Gates',
'Home/Fireplaces',
'Home/Firewood',
'Home/Flooring Sales-Installation-Repair',
'Home/Foundation Repair',
'Home/Fountains',
'Home/Framing',
'Home/Furniture - Refinishing & Repair',
'Home/Garage Doors',
'Home/Gas Leak Repair',
'Home/Gas Logs',
'Home/Generator',
'Home/Glass & Mirrors',
'Home/Glass Block',
'Home/Greenhouses-Nurseries',
'Home/Gutter Cleaning',
'Home/Gutter Repair & Replacement',
'Home/Handymen',
'Home/Hardware & Home Improvement Stores',
'Home/Hardwood Flooring Sales-Installation-Refinishing',
'Home/Heating & A-C',
'Home/Heating Oil',
'Home/Home Automation',
'Home/Home Inspection',
'Home/Home Staging',
'Home/Insulation',
'Home/Interior Design & Decorating',
'Home/Land Surveying',
'Home/Landscaping',
'Home/Landscaping & Lighting',
'Home/Landscaping - Hardscaping & Pavers',
'Home/Landscaping - Lakefront',
'Home/Lawn & Yard Work',
'Home/Lawn Fertilization & Treatment',
'Home/Lawn Irrigation',
'Home/Lawn Mower & Power Tool Repair',
'Home/Lead Testing & Removal',
'Home/Leaf Removal',
'Home/Lighting',
'Home/Locksmiths',
'Home/Marble & Granite',
'Home/Masonry',
'Home/Misting Systems',
'Home/Mold Testing & Remediation',
'Home/Mortgage Companies',
'Home/Moving',
'Home/Mulch & Topsoil',
'Home/Organization - Home & Garage',
'Home/Painting - Exterior',
'Home/Painting - Interior',
'Home/Pest Control-Exterminating',
'Home/Plastering',
'Home/Playground Equipment',
'Home/Plumbing',
'Home/Plumbing - Drain Cleaning',
'Home/Pool & Spa Service',
'Home/Pressure Washing',
'Home/Propane Sales-Services',
'Home/Property Management',
'Home/Radon Detection & Reduction',
'Home/Real Estate Agents',
'Home/Remodeling - Basements',
'Home/Remodeling - General',
'Home/Remodeling - Kitchen & Bathroom',
'Home/Remodeling - Modular & Mobile Home',
'Home/Remodeling - Sunrooms & Patio Enclosures',
'Home/Roof Cleaning',
'Home/Roofing',
'Home/Roto-Tilling',
'Home/Screen Repair',
'Home/Septic Tank',
'Home/Sewer Cleaning',
'Home/Siding',
'Home/Skylights',
'Home/Solar Panels',
'Home/Stone & Gravel',
'Home/Storage Facilities',
'Home/Structural Engineering',
'Home/Stucco',
'Home/Title Companies',
'Home/Tree Service',
'Home/Wallpaper Removal',
'Home/Wallpapering',
'Home/Warranty Companies - Home',
'Home/Water & Smoke Damage',
'Home/Water Heaters',
'Home/Water Softeners',
'Home/Wells & Pumps',
'Home/Window Tinting',
'Home/Window Treatments',
'Home/Windows',
'Home/Windows - Egress',
'Home/Windows - Safety & Security Film',
'Home/Wrought Iron',
'Auto/Auto Accessories',
'Auto/Auto Alarms',
'Auto/Auto Body Work',
'Auto/Auto Detailing',
'Auto/Auto Glass',
'Auto/Auto Inspections',
'Auto/Auto Mufflers',
'Auto/Auto Painting',
'Auto/Auto Radiators',
'Auto/Auto Radio Service',
'Auto/Auto Sales',
'Auto/Auto Service',
'Auto/Auto Tires',
'Auto/Auto Towing',
'Auto/Auto Transmission',
'Auto/Auto Transportation',
'Auto/Car Washes',
'Health/Allergy & Immunology',
'Health/Allergy & Immunology - Pediatrics',
'Health/Alternative Med. - Acupuncture',
'Health/Alternative Med. - General',
'Health/Alternative Med. - Hypnotherapy',
'Health/Alternative Med. - Traditional Chinese Medicine',
'Health/Ambulance Services',
'Health/Anesthesiology',
'Health/Blood Care-Hematology',
'Health/Blood Care-Hematology - Pediatrics',
'Health/CCancer-Oncology',
'Health/Cancer-Oncology - Pediatric',
'Health/Chest-Thoracic Surgery',
'Health/Chest-Thoracic Surgery - Pediatrics',
'Health/Chiropractic Care',
'Health/Counseling - Addiction',
'Health/Counseling - Family',
'Health/Counseling - General',
'Health/Counseling - Grief',
'Health/Counseling - Marriage-Relationship',
'Health/Dentistry - Cosmetic',
'Health/Dentistry - Denture Labs',
'Health/Dentistry - Dentures-Prosthodontics',
'Health/Dentistry - General',
'Health/Dentistry - Gum Care-Periodontics',
'Health/Dentistry - Oral & Maxillofacial Surgery',
'Health/Dentistry - Orthodontics',
'Health/Dentistry - Pediatrics',
'Health/Dentistry - Root Canals-Endodontics',
'Health/Dentistry - TMJ',
'Health/Dermatology - General',
'Health/Dermatology - Laser Skin Treatment',
'Health/Dermatology - Pediatrics',
'Health/Digestive Care-Gastroenterology',
'Health/Digestive Care-Gastroenterology - Pediatrics',
'Health/Ear Nose & Throat - Hearing Aids',
'Health/Ear Nose & Throat - Hearing Tests-Audiology',
'Health/Ear, Nose & Throat - Pediatrics',
'Health/Ear, Nose & Throat-Otolaryngology',
'Health/Endocrinology & Metabolism',
'Health/Endocrinology & Metabolism - Pediatrics',
'Health/Eye Care - LASIK',
'Health/Eye Care - Ophthalmology',
'Health/Eye Care - Optical Sales & Repair',
'Health/Eye Care - Optometry',
'Health/Eye Care - Pediatric Ophthalmology',
'Health/Eye Care - Pediatric Optometry',
'Health/Fitness - Centers',
'Health/Fitness - Equipment',
'Health/Fitness - Training',
'Health/Foot Care - Podiatry',
'Health/Foot Care - Prosthetics & Orthotics',
'Health/Gastroenterology - Colon & Rectal Care',
'Health/General Surgery',
'Health/General Surgery - Pediatrics',
'Health/Genetic Medicine',
'Health/Hair - Replacement & Transplants',
'Health/Hair Removal',
'Health/Health Education-Workshops',
'Health/Health Insurance - Agents & Companies',
'Health/Health Insurance - Brokers',
'Health/Heart Care - Cardiovascular Surgery',
'Health/Heart Care - General Cardiology',
'Health/Heart Care - Interventional Cardiology',
'Health/Heart Care - Pediatric Cardiology',
'Health/Heart Care - Pediatric Cardiovascular Surgery',
'Health/Home Healthcare - Disability Equipment & Services',
'Health/Home Healthcare - Hospice',
'Health/Home Healthcare - In-home Services',
'Health/Home Healthcare - Independent Living',
'Health/Home Healthcare - Medical Alert Systems',
'Health/Home Healthcare - Medical Equipment & Services',
'Health/Hospitalist',
'Health/Hospitals - Childrens',
'Health/Hospitals - Emergency Medicine',
'Health/Hospitals - General',
'Health/Hospitals - Intensive Care',
'Health/Imaging & Pediatric Radiology',
'Health/Imaging - Radiology',
'Health/Imaging - Ultrasound Diagnostics',
'Health/Infectious Diseases',
'Health/Kidney Care-nephrology',
'Health/Kidney Care-nephrology - Pediatrics',
'Health/Lab Services - Blood Banks',
'Health/Lab Services - Blood Work',
'Health/Lab Services - Diagnostic',
'Health/Lab Services - Drug & Alcohol Testing',
'Health/Liver Care-Hepatology',
'Health/Longterm Care - Adult Daycare',
'Health/Longterm Care - Assisted Living',
'Health/Longterm Care - Hospice Facilities',
'Health/Longterm Care - Nursing Homes',
'Health/Lung-Pulmonology',
'Health/Lung-Pulmonology & Pediatrics',
'Health/Massage Therapy',
'Health/Massage Therapy - Reflexology',
'Health/Medical Spa',
'Health/Mental Health - Alcohol Treatment Centers',
'Health/Mental Health - Drug Abuse Treatment Centers',
'Health/Mental Health - Psychiatry',
'Health/Mental Health - Psychology',
'Health/Neuroscience - Neurology',
'Health/Neuroscience - Neurosurgery',
'Health/Neuroscience - Pediatric Neurology',
'Health/Nurse Practitioners',
'Health/Orthopedics',
'Health/Orthopedics - Foot & Ankle',
'Health/Orthopedics - Hand & Wrist',
'Health/Orthopedics - Hips',
'Health/Orthopedics - Knee & Leg',
'Health/Orthopedics - Pediatrics',
'Health/Orthopedics - Shoulder & Arm',
'Health/Orthopedics - Spine & Neck',
'Health/Otolaryngology',
'Health/Outpatient Centers - Urgent Care',
'Health/PPain Management',
'Health/Patient Advocates',
'Health/Pediatrics - Primary Care',
'Health/Pharmacies',
'Health/Plastic Surgery - Cosmetic',
'Health/Plastic Surgery - Reconstructive',
'Health/Primary Care - Family Medicine',
'Health/Primary Care - Geriatrics',
'Health/Primary Care - Internal Medicine',
'Health/Primary Care - Osteopathic Medicine',
'Health/Rehabilitation - Occupational Therapy',
'Health/Rehabilitation - Physical Medicine & Rehab',
'Health/Rehabilitation - Physical Therapy',
'Health/Rheumatology',
'Health/Rheumatology - Pediatrics',
'Health/Skin & Body Care - Aromatherapy',
'Health/Skin & Body Care - Colonic Irrigation',
'Health/Skin & Body Care - Day Spa Services',
'Health/Skin & Body Care - Vein Treatment',
'Health/Sleep Medicine',
'Health/Speech Therapy',
'Health/Sports Medicine',
'Health/Sports Medicine - Pediatrics',
'Health/Telemedicine',
'Health/Transplant Surgery',
'Health/Travel Medicine',
'Health/Urology',
'Health/Urology - Pediatric Urology',
'Health/VVascular Surgery',
'Health/Weight Mgt. - Bariatric Medicine',
'Health/Weight Mgt. - Dietitians-Nutritionists',
'Health/Weight management - Vitamin & Supplement Stores',
'Health/Weight management - Weight Loss Programs',
'Health/Womens Services - Breast Surgery',
'Health/Womens Services - Doulas',
'Health/Womens Services - Obstetrics & Gynecology',
'Health/Womens services - Birth Control & Family Planning',
'Health/Womens services - Fertility',
'Health/Womens services - Midwives',
'Pets/Animal & House Sitting',
'Pets/Animal Boarding Kennels',
'Pets/Animal Breeders-Brokers',
'Pets/Animal Burial-Cremation',
'Pets/Animal Fencing',
'Pets/Animal Grooming',
'Pets/Animal Rescues-Shelters',
'Pets/Animal Training',
'Pets/Aquariums',
'Pets/Dog Walking',
'Pets/Pet Bakeries',
'Pets/Pet Insurance',
'Pets/Pet Stores',
'Pets/Pooper Scoopers',
'Pets/Veterinarians',
'Services/Accountants-Tax Consultants',
'Services/Alterations-Sewing-Decorating',
'Services/Animal Removal',
'Services/Antiques',
'Services/Appliance Refinishing',
'Services/Appliance Repair - Large',
'Services/Appliance Repair - Small',
'Services/Appliance Sales',
'Services/Appraisals - Antiques-Jewelry-Items',
'Services/Artwork-Murals',
'Services/Auction Services',
'Services/Baby Equipment Rental',
'Services/Banking-Credit Unions',
'Services/Basketball Goals',
'Services/Bicycles',
'Services/Billiard Table Repair',
'Services/Billiard Table Sales',
'Services/Biohazard Remediation',
'Services/Blind Cleaning',
'Services/Boats',
'Services/Bridal Shops',
'Services/Buffing & Polishing',
'Services/Buying Services',
'Services/Cake Decorating',
'Services/Calligraphy',
'Services/Camcorder Repair',
'Services/Camera Repair',
'Services/Career Coach',
'Services/Carpet Cleaning',
'Services/Catering',
'Services/Chefs',
'Services/Child Care - Center',
'Services/Child Care - Family-In Provider Home',
'Services/Child Care - Other',
'Services/Childproofing',
'Services/China Repair',
'Services/Cleaning',
'Services/Clock Repair',
'Services/Computer Repair & Services',
'Services/Computer Sales',
'Services/Computer Training',
'Services/Cooking Classes',
'Services/Costume Rental',
'Services/Credit Repair',
'Services/Dance Instruction',
'Services/Delivery Service',
'Services/Dermatology - General',
'Services/Dermatology - Laser Skin Treatment',
'Services/Dermatology - Pediatrics',
'Services/Dock Building & Repair',
'Services/Drapery Cleaning',
'Services/Drivers Education',
'Services/Dry Cleaning',
'Services/Dryer Vent Cleaning',
'Services/Dumpster Service',
'Services/Earthquake Retrofitting',
'Services/Electronic Gadget Repair',
'Services/Entertainment-Parties',
'Services/Errands',
'Services/Film Developing',
'Services/Financial Planning',
'Services/Floor Cleaning-Polishing-Waxing',
'Services/Florists',
'Services/Funeral Homes',
'Services/Furniture - Custom Made',
'Services/Furniture - Refinishing & Repair',
'Services/Furniture - Sales',
'Services/Furs',
'Services/Garbage Collection',
'Services/Gas Grill Repair',
'Services/Gas Leak Repair',
'Services/Genealogy',
'Services/Gifts',
'Services/Graphic Design',
'Services/Guns',
'Services/Hair - Replacement & Transplants',
'Services/Hair Removal',
'Services/Hair Salons-Barbers',
'Services/Hauling',
'Services/Holiday Decorating',
'Services/Housecleaning',
'Services/Hurricane Shutters',
'Services/Insurance Agencies',
'Services/Internet Service',
'Services/Ironing',
'Services/Jewelry Sales-Design-Repair',
'Services/LLamp Repair',
'Services/Leather & Vinyl Repair',
'Services/Life Coaches',
'Services/Limousine Service',
'Services/Luggage Repair',
'Services/Mailbox Repair',
'Services/Mailing Service',
'Services/Manicures-Nails',
'Services/Marinas',
'Services/Mattresses',
'Services/Medical Spa',
'Services/Metal Fabrication & Restoration',
'Services/Motorcycle Service',
'Services/Music Instruction',
'Services/Musical Instrument Repair',
'Services/Notary',
'Services/OOffice Equipment Repair',
'Services/Oriental Rug Cleaning',
'Services/Paper Shredding',
'Services/Phone Repair',
'Services/Phone Sales',
'Services/Phone Service - Cellular',
'Services/Phone Service - Landline',
'Services/Phone Wiring',
'Services/Photography',
'Services/Piano Moving',
'Services/Piano Tuning',
'Services/Plastic Surgery - Cosmetic',
'Services/Plastic Surgery - Reconstructive',
'Services/Printing - Copies',
'Services/Printing - Invitations',
'Services/Private Investigation',
'Services/RV Sales & Service',
'Services/Reception Halls',
'Services/Rentals - Cars',
'Services/Rentals - Equipment',
'Services/Rentals - Parties',
'Services/Rentals - Trucks',
'Services/Rentals - Vans',
'Services/Resume Services',
'Services/Roof Ice-Snow Removal',
'Services/Roofing',
'Services/Secretarial Services',
'Services/Sewing Machine Repair',
'Services/Sharpening',
'Services/Shoe Repair',
'Services/Signs',
'Services/Skin & Body Care - Day Spa Services',
'Services/Skin & Body Care - Vein Treatment',
'Services/Special Events',
'Services/Stereo & Home Theater Systems',
'Services/Storage Facilities',
'Services/TV Antenna',
'Services/TV Repair',
'Services/TV Sales',
'Services/TV Service - Cable',
'Services/TV Service - Satellite',
'Services/Tablepads',
'Services/Tanning Salons',
'Services/Tattoos-Piercings',
'Services/Taxi-Shuttle Service',
'Services/Ticket Broker Service',
'Services/Toy Repair',
'Services/Travel Agencies',
'Services/Trophy Shops',
'Services/Tutoring',
'Services/Tuxedo Rental',
'Services/Upholstering - Boat & Auto',
'Services/Upholstering - General',
'Services/Upholstery Cleaning',
'Services/VCR Repair',
'Services/Vacuum Cleaners',
'Services/Video Duplication & Transfer',
'Services/Video Production',
'Services/Voice Mail',
'Services/Warranty Companies - Non-Home',
'Services/Watch Repair',
'Services/Water Coolers',
'Services/Website Design & Development',
'Services/Wedding Planning',
'Services/Welding',
'Services/Window Cleaning'
	];

	var cat	= {};
	for(i = 0;i < allCats.length;i++)
	{
		cat = new Category({ "name" :allCats[i] });
		
		cat.save(null, {
		  success: function(gameScore) {
		    // Execute any logic that should take place after the object is saved.
		    console.log('New Category: ' + cat.name);
		  },
		  error: function(gameScore, error) {
		    // Execute any logic that should take place if the save fails.
		    // error is a Parse.Error with an error code and message.
		    console.log('Failed to create new object, with error code: ' + error.message);
		  }
		});
	}
	response.success( "Done." );
	
};

exports.categories = function(request, response) {
  
  
  	if (request.params.skipAuth)
	{
		var catList = processCategories(response);

	}else{
		
		var currentUser = Parse.User.current();
		if (currentUser){
	
			if (currentUser.authenticated())
			{
				processCategories(response);
		
			}else{
		
				response.error('User Not authenticated');
			}
		} else {
			// show the signup or login page
			response.error('No user or Not authenticated');
		}  
	}
  
	
  
};
import Fire from '../Fire';
import _ from 'lodash';

class DataStore {
	constructor() {
		this.CoformatiqueTimer = Fire.database().ref();
	}

	saveTask(data) {
		// data = _.pick(data, ['project', 'taskTitle'])
		data['created'] = new Date(data['created']).getTime();
		this.CoformatiqueTimer.child('tasks').push().set(data);
	}
	endTask(id) {
		let ended = new Date().getTime();
		this.CoformatiqueTimer.child(`tasks/${id}`).update({ended: ended});
	}
	getStartedTask() {
		let Tasks = this.CoformatiqueTimer.child('tasks');
		return Tasks.orderByChild('ended').equalTo(null).limitToFirst(1);
	}
	getTasks() {
		return this.CoformatiqueTimer.child('tasks').orderByChild('created');
	}
}
export default DataStore;

let x = new DataStore
let z = [{
  "taskTitle": "Ondansetron",
  "project": "Actavis Inc.",
  "created": "2018-05-12T01:22:12Z",
  "ended": "2017-05-01T00:44:10Z"
}, {
  "taskTitle": "Clearskin Professional",
  "project": "Avon Products, Inc.",
  "created": "2018-05-03T12:11:33Z",
  "ended": "2017-10-13T23:25:14Z"
}, {
  "taskTitle": "Acacia",
  "project": "Nelco Laboratories, Inc.",
  "created": "2018-05-10T16:03:25Z",
  "ended": "2017-08-09T06:10:53Z"
}, {
  "taskTitle": "ACTIQ",
  "project": "Cephalon, Inc.",
  "created": "2018-05-16T23:26:23Z",
  "ended": "2018-04-08T17:25:47Z"
}, {
  "taskTitle": "Smart Sense Mucus Relief Cough",
  "project": "Kmart Corporation",
  "created": "2018-05-08T17:49:07Z",
  "ended": "2017-11-24T14:23:53Z"
}, {
  "taskTitle": "cephalexin",
  "project": "Unit Dose Services",
  "created": "2018-05-18T15:49:52Z",
  "ended": "2017-12-21T17:24:06Z"
}, {
  "taskTitle": "Normosol-R",
  "project": "Hospira, Inc.",
  "created": "2018-05-10T17:38:45Z",
  "ended": "2017-06-10T11:52:24Z"
}, {
  "taskTitle": "METRONIDAZOLE",
  "project": "St Marys Medical Park Pharmacy",
  "created": "2018-05-14T12:23:00Z",
  "ended": "2018-03-18T03:42:43Z"
}, {
  "taskTitle": "UV LOCK FLOWER NON CHEMICAL SUN",
  "project": "NATURE REPUBLIC CO., LTD.",
  "created": "2018-05-10T14:44:43Z",
  "ended": "2017-08-15T00:19:25Z"
}, {
  "taskTitle": "Nifedical",
  "project": "State of Florida DOH Central Pharmacy",
  "created": "2018-05-03T09:32:35Z",
  "ended": "2017-06-03T05:19:08Z"
}, {
  "taskTitle": "Trazodone Hydrochloride",
  "project": "Golden State Medical Supply, Inc.",
  "created": "2018-05-03T06:11:39Z",
  "ended": "2017-09-03T14:29:03Z"
}, {
  "taskTitle": "Ready Foundation",
  "project": "Bare Escentuals Beauty Inc.",
  "created": "2018-05-15T23:07:25Z",
  "ended": "2017-05-14T06:26:09Z"
}, {
  "taskTitle": "Lisinopril",
  "project": "Qualitest Pharmaceuticals",
  "created": "2018-05-10T22:09:06Z",
  "ended": "2017-10-30T00:39:24Z"
}, {
  "taskTitle": "CITOMIX",
  "project": "Guna spa",
  "created": "2018-05-03T13:45:00Z",
  "ended": "2017-06-30T12:53:10Z"
}, {
  "taskTitle": "Lamotrigine",
  "project": "REMEDYREPACK INC.",
  "created": "2018-05-04T02:03:49Z",
  "ended": "2017-09-08T05:22:42Z"
}, {
  "taskTitle": "Pure Cornstarch Baby",
  "project": "Walgreen Company",
  "created": "2018-05-08T00:01:33Z",
  "ended": "2018-04-24T13:16:00Z"
}, {
  "taskTitle": "Oxygen",
  "project": "Linde Gas North America LLC",
  "created": "2018-05-03T07:56:51Z",
  "ended": "2018-02-09T04:54:36Z"
}, {
  "taskTitle": "Boolicious Antibacterial Hand",
  "project": "SJ Creations, Inc.",
  "created": "2018-05-12T18:03:52Z",
  "ended": "2017-10-12T16:33:04Z"
}, {
  "taskTitle": "GOOD AFTERNOON BERRY BERRY TEA BB",
  "project": "SKINFOOD CO., LTD.",
  "created": "2018-05-06T02:17:58Z",
  "ended": "2017-06-08T08:08:13Z"
}, {
  "taskTitle": "Roxicet",
  "project": "Roxane Laboratories, Inc.",
  "created": "2018-05-12T17:33:04Z",
  "ended": "2017-11-06T22:50:51Z"
}, {
  "taskTitle": "Cataract Crystalline Lens",
  "project": "Natural Ophthalmics, Inc",
  "created": "2018-05-18T08:33:06Z",
  "ended": "2017-09-23T05:06:18Z"
}, {
  "taskTitle": "Childrens Double Antibiotic with Pain Relief",
  "project": "Walgreen Company",
  "created": "2018-05-07T23:28:05Z",
  "ended": "2018-04-08T22:04:49Z"
}, {
  "taskTitle": "Dog Epithelium",
  "project": "Nelco Laboratories, Inc.",
  "created": "2018-05-20T23:54:26Z",
  "ended": "2017-08-31T02:53:53Z"
}, {
  "taskTitle": "Neutrogena",
  "project": "Neutrogena Corporation",
  "created": "2018-05-16T17:38:06Z",
  "ended": "2017-07-02T17:38:38Z"
}, {
  "taskTitle": "Rivastigmine Tartrate",
  "project": "Watson Laboratories, Inc.",
  "created": "2018-05-01T19:49:40Z",
  "ended": "2018-03-30T12:19:27Z"
}, {
  "taskTitle": "FATIGUE",
  "project": "Natural Health Supply",
  "created": "2018-05-09T14:04:18Z",
  "ended": "2018-01-04T05:59:35Z"
}, {
  "taskTitle": "Dial Complete Antibacterial Foaming Hand Wash with Lotion",
  "project": "The Dial Corporation",
  "created": "2018-05-10T06:20:05Z",
  "ended": "2017-05-04T05:03:14Z"
}, {
  "taskTitle": "tizanidine",
  "project": "Golden State Medical Supply, Inc.",
  "created": "2018-05-12T08:56:23Z",
  "ended": "2018-03-10T16:06:44Z"
}, {
  "taskTitle": "SHISEIDO RADIANT LIFTING FOUNDATION",
  "project": "SHISEIDO AMERICA INC.",
  "created": "2018-05-17T17:43:29Z",
  "ended": "2018-01-02T13:20:21Z"
}, {
  "taskTitle": "Haloperidol",
  "project": "Major Pharmaceuticals",
  "created": "2018-05-16T01:08:55Z",
  "ended": "2017-11-12T03:20:13Z"
}, {
  "taskTitle": "Salonpas Arthritis Pain",
  "project": "Hisamitsu Pharmaceutical Co., Inc.",
  "created": "2018-05-13T04:48:24Z",
  "ended": "2018-04-24T11:56:29Z"
}, {
  "taskTitle": "ULTRACET",
  "project": "Rebel Distributors Corp",
  "created": "2018-05-14T06:21:17Z",
  "ended": "2017-08-12T19:58:18Z"
}, {
  "taskTitle": "Hydrocortisone",
  "project": "Rebel Distributors Corp",
  "created": "2018-05-07T03:05:17Z",
  "ended": "2018-01-11T22:54:45Z"
}, {
  "taskTitle": "Azathioprine",
  "project": "Cadila Healthcare Limited",
  "created": "2018-05-04T05:18:23Z",
  "ended": "2017-06-02T12:09:09Z"
}, {
  "taskTitle": "SAMSCA",
  "project": "Otsuka America Pharmaceutical Inc.",
  "created": "2018-05-05T00:49:30Z",
  "ended": "2017-07-29T07:59:13Z"
}, {
  "taskTitle": "Blossom HP 3",
  "project": "Blossom Pharmaceuticals",
  "created": "2018-05-13T00:36:02Z",
  "ended": "2018-04-23T20:37:05Z"
}, {
  "taskTitle": "Yes To Cucumbers Natural Sunscreen SPF 30",
  "project": "Autumn Harp, Inc.",
  "created": "2018-05-10T07:51:40Z",
  "ended": "2017-07-06T02:19:24Z"
}, {
  "taskTitle": "Exuviance CoverBlend Concealing Treatment Makeup",
  "project": "NeoStrata Company Inc.",
  "created": "2018-05-01T11:59:22Z",
  "ended": "2018-04-28T18:13:59Z"
}, {
  "taskTitle": "Benzonatate",
  "project": "Preferred Pharmaceuticals, Inc.",
  "created": "2018-05-03T06:07:59Z",
  "ended": "2017-11-11T23:26:26Z"
}, {
  "taskTitle": "Neutrogena SkinClearing",
  "project": "Neutrogena Corporation",
  "created": "2018-05-06T21:12:46Z",
  "ended": "2018-04-06T08:11:21Z"
}, {
  "taskTitle": "Antibacterial Foaming Hand",
  "project": "Jets, Sets, & Elephants Beauty Corp.",
  "created": "2018-05-20T23:32:27Z",
  "ended": "2017-06-26T17:23:20Z"
}, {
  "taskTitle": "SSD Cream",
  "project": "REMEDYREPACK INC.",
  "created": "2018-05-13T12:10:57Z",
  "ended": "2018-04-13T20:52:51Z"
}, {
  "taskTitle": "Mentholatum Natural Ice",
  "project": "The Mentholatum Company",
  "created": "2018-05-01T05:43:15Z",
  "ended": "2018-01-31T04:41:49Z"
}, {
  "taskTitle": "Truvada",
  "project": "State of Florida DOH Central Pharmacy",
  "created": "2018-05-03T01:30:20Z",
  "ended": "2018-04-26T12:04:11Z"
}, {
  "taskTitle": "Clonazepam",
  "project": "TYA Pharmaceuticals",
  "created": "2018-05-17T14:31:58Z",
  "ended": "2017-07-17T19:52:16Z"
}, {
  "taskTitle": "Antioxidant Daily Protectant SPF 50",
  "project": "Goodier Cosmetics LP",
  "created": "2018-05-14T11:57:38Z",
  "ended": "2018-02-14T22:06:04Z"
}, {
  "taskTitle": "JUGLANS REGIA POLLEN",
  "project": "ALK-Abello, Inc.",
  "created": "2018-05-12T00:47:42Z",
  "ended": "2017-09-10T15:12:14Z"
}, {
  "taskTitle": "FANAPT",
  "project": "Novartis Pharmaceuticals Corporation",
  "created": "2018-05-12T08:54:21Z",
  "ended": "2017-09-16T21:00:25Z"
}, {
  "taskTitle": "Calcium Chloride",
  "project": "Cardinal Health",
  "created": "2018-05-10T09:01:09Z",
  "ended": "2017-07-08T19:02:27Z"
}, {
  "taskTitle": "Morphine sulfate",
  "project": "Actavis Elizabeth LLC",
  "created": "2018-05-18T02:16:32Z",
  "ended": "2018-01-06T18:27:18Z"
}, {
  "taskTitle": "acid reducer",
  "project": "Meijer Distribution Inc",
  "created": "2018-05-12T07:59:05Z",
  "ended": "2018-03-18T19:55:49Z"
}, {
  "taskTitle": "Tea Blend Samples",
  "project": "JAFRA COSMETICS INTERNATIONAL",
  "created": "2018-05-09T16:25:54Z",
  "ended": "2018-01-24T15:24:38Z"
}, {
  "taskTitle": "Hydrochlorothiazide",
  "project": "REMEDYREPACK INC.",
  "created": "2018-05-19T05:37:43Z",
  "ended": "2017-10-29T16:13:47Z"
}, {
  "taskTitle": "simply right ibuprofen",
  "project": "Sam's West Inc",
  "created": "2018-05-14T00:10:22Z",
  "ended": "2018-05-10T23:25:27Z"
}, {
  "taskTitle": "Protriptyline Hydrochloride",
  "project": "Epic Pharma, LLC",
  "created": "2018-05-14T06:17:30Z",
  "ended": "2017-12-10T19:31:38Z"
}, {
  "taskTitle": "DELFLEX",
  "project": "Fresenius Medical Care North America",
  "created": "2018-05-16T12:40:58Z",
  "ended": "2017-11-02T00:57:39Z"
}, {
  "taskTitle": "sunmark pain reliever",
  "project": "McKesson",
  "created": "2018-05-14T08:58:31Z",
  "ended": "2017-09-27T22:46:10Z"
}, {
  "taskTitle": "Medicated Pain Relief",
  "project": "Kareway Product, Inc.",
  "created": "2018-05-01T02:17:45Z",
  "ended": "2017-08-13T18:38:57Z"
}, {
  "taskTitle": "Diphenhydramine Hydrochloride",
  "project": "Cardinal Health",
  "created": "2018-05-07T16:11:48Z",
  "ended": "2017-07-12T13:04:53Z"
}, {
  "taskTitle": "Anastrozole",
  "project": "Ascend Laboratories, LLC",
  "created": "2018-05-03T14:35:29Z",
  "ended": "2017-09-26T18:19:50Z"
}, {
  "taskTitle": "Phylorinol",
  "project": "Schaffer Laboratories",
  "created": "2018-05-21T23:29:54Z",
  "ended": "2017-06-19T19:16:01Z"
}, {
  "taskTitle": "Drosera comp.",
  "project": "Uriel Pharmacy Inc.",
  "created": "2018-05-13T10:21:12Z",
  "ended": "2017-09-05T19:58:34Z"
}, {
  "taskTitle": "Morphine Sulfate",
  "project": "International Medication Systems, Limited",
  "created": "2018-05-19T16:20:57Z",
  "ended": "2018-02-14T01:12:32Z"
}, {
  "taskTitle": "Dexpanthenol",
  "project": "American Regent, Inc.",
  "created": "2018-05-15T19:14:22Z",
  "ended": "2017-08-11T15:18:28Z"
}, {
  "taskTitle": "Galantamine Hydrobromide",
  "project": "Sun Pharma Global FZE",
  "created": "2018-05-02T15:41:58Z",
  "ended": "2017-08-09T03:42:27Z"
}, {
  "taskTitle": "Koh Gen Do Aqua Foundation",
  "project": "Koh Gen Do USA, Inc",
  "created": "2018-05-20T06:46:38Z",
  "ended": "2017-05-12T19:04:34Z"
}, {
  "taskTitle": "OXYGEN",
  "project": "Mountain Valley Home Medical Equipment, Inc",
  "created": "2018-05-12T19:52:47Z",
  "ended": "2017-07-22T15:20:32Z"
}, {
  "taskTitle": "biclora",
  "project": "Hawthorn Pharmaceuticals, Inc",
  "created": "2018-05-01T12:19:30Z",
  "ended": "2017-08-03T13:15:08Z"
}, {
  "taskTitle": "Bone Repair",
  "project": "BioActive Nutritional, Inc.",
  "created": "2018-05-16T15:51:19Z",
  "ended": "2017-11-18T03:12:13Z"
}, {
  "taskTitle": "Clopidogrel",
  "project": "Bryant Ranch Prepack",
  "created": "2018-05-02T07:55:52Z",
  "ended": "2017-06-22T22:55:26Z"
}, {
  "taskTitle": "Lice Treatment",
  "project": "McKesson",
  "created": "2018-05-06T01:24:27Z",
  "ended": "2017-09-19T07:43:02Z"
}, {
  "taskTitle": "Hydroxyzine Hydrochloride",
  "project": "PD-Rx Pharmaceuticals, Inc.",
  "created": "2018-05-16T07:17:31Z",
  "ended": "2017-07-07T23:26:47Z"
}, {
  "taskTitle": "Terbinafine",
  "project": "HARRIS Pharmaceutical, Inc.",
  "created": "2018-05-15T16:05:00Z",
  "ended": "2018-04-24T01:08:34Z"
}, {
  "taskTitle": "FLU HP",
  "project": "Natural Creations, Inc.",
  "created": "2018-05-06T13:26:40Z",
  "ended": "2017-07-08T06:20:46Z"
}, {
  "taskTitle": "APATITE PROFESSIONAL",
  "project": "Sungwon Pharmaceutical Co., Ltd.",
  "created": "2018-05-20T03:06:35Z",
  "ended": "2017-07-03T22:58:31Z"
}, {
  "taskTitle": "CPDA-1",
  "project": "Fenwal, Inc.",
  "created": "2018-05-15T17:38:40Z",
  "ended": "2017-08-29T09:19:11Z"
}, {
  "taskTitle": "SAVELLA",
  "project": "STAT RX USA LLC",
  "created": "2018-05-10T02:24:44Z",
  "ended": "2018-04-06T16:59:03Z"
}, {
  "taskTitle": "Mycophenolate Mofetil",
  "project": "Mylan Institutional Inc.",
  "created": "2018-05-07T07:37:38Z",
  "ended": "2017-11-06T07:32:57Z"
}, {
  "taskTitle": "SPF 18 SUPER SENSITIVE SUNSCREEN",
  "project": "ORGANIC & SUSTAINABLE BEAUTY",
  "created": "2018-05-07T04:28:04Z",
  "ended": "2017-12-02T18:09:22Z"
}, {
  "taskTitle": "IASO A5 Super Brightening Formula",
  "project": "IASO Inc",
  "created": "2018-05-01T11:52:26Z",
  "ended": "2018-01-03T06:42:06Z"
}, {
  "taskTitle": "Good Neighbor Pharmacy Sore Throat",
  "project": "Amerisource Bergen",
  "created": "2018-05-02T01:47:40Z",
  "ended": "2017-11-25T20:54:17Z"
}, {
  "taskTitle": "AMOREPACIFIC",
  "project": "AMOREPACIFIC",
  "created": "2018-05-19T02:25:06Z",
  "ended": "2017-05-23T12:57:17Z"
}, {
  "taskTitle": "Strattera",
  "project": "Carilion Materials Management",
  "created": "2018-05-16T14:37:25Z",
  "ended": "2018-01-03T05:24:20Z"
}, {
  "taskTitle": "Fenofibrate",
  "project": "H2-Pharma, LLC",
  "created": "2018-05-20T11:32:27Z",
  "ended": "2018-05-11T03:09:58Z"
}, {
  "taskTitle": "MS CONTIN",
  "project": "Cardinal Health",
  "created": "2018-05-15T10:47:30Z",
  "ended": "2018-03-18T02:09:38Z"
}, {
  "taskTitle": "BAROX",
  "project": "Dr.JangLab Inc.",
  "created": "2018-05-08T22:34:49Z",
  "ended": "2018-03-16T09:18:02Z"
}, {
  "taskTitle": "Oxcarbazepine",
  "project": "REMEDYREPACK INC.",
  "created": "2018-05-02T06:05:59Z",
  "ended": "2018-03-15T23:15:28Z"
}, {
  "taskTitle": "XtraCare Instant Hand Sanitizer",
  "project": "Rejoice International",
  "created": "2018-05-13T00:23:13Z",
  "ended": "2018-03-14T06:08:58Z"
}, {
  "taskTitle": "Aspirin",
  "project": "Kroger Company",
  "created": "2018-05-19T08:51:37Z",
  "ended": "2018-04-18T14:05:29Z"
}, {
  "taskTitle": "Badger SunScreen",
  "project": "Autumn Harp, Inc.",
  "created": "2018-05-16T23:19:44Z",
  "ended": "2017-11-26T11:52:05Z"
}, {
  "taskTitle": "Potassium Acetate",
  "project": "American Regent, Inc.",
  "created": "2018-05-12T11:55:42Z",
  "ended": "2017-06-13T23:01:22Z"
}, {
  "taskTitle": "Clonidine Hydrochloride",
  "project": "Mylan Institutional Inc.",
  "created": "2018-05-12T19:15:39Z",
  "ended": "2017-12-28T22:22:41Z"
}, {
  "taskTitle": "Isopto Carbachol",
  "project": "Alcon Laboratories, Inc.",
  "created": "2018-05-07T01:12:42Z",
  "ended": "2017-05-19T13:36:56Z"
}, {
  "taskTitle": "Hydrocodone Bitartrate and Acetaminophen",
  "project": "G&W Laboratories, Inc.",
  "created": "2018-05-08T00:52:48Z",
  "ended": "2017-09-18T11:38:25Z"
}, {
  "taskTitle": "Simvastatin",
  "project": "Aurobindo Pharma Limited",
  "created": "2018-05-04T12:48:18Z",
  "ended": "2018-02-14T18:13:30Z"
}, {
  "taskTitle": "Antibacterial Hand Cleaner with Aloe and Vitamin E",
  "project": "Kutol Products Company, Inc.",
  "created": "2018-05-15T10:00:35Z",
  "ended": "2017-06-28T09:43:44Z"
}, {
  "taskTitle": "Penicillin V Potassium",
  "project": "A-S Medication Solutions LLC",
  "created": "2018-05-11T22:52:24Z",
  "ended": "2017-07-25T01:45:01Z"
}, {
  "taskTitle": "Queen Perfume Hair",
  "project": "Tamnamo Co., Ltd",
  "created": "2018-05-02T10:49:45Z",
  "ended": "2018-04-23T14:55:35Z"
}, {
  "taskTitle": "Citalopram Hydrobromide",
  "project": "NCS HealthCare of KY, Inc dba Vangard Labs",
  "created": "2018-05-10T16:17:24Z",
  "ended": "2017-07-13T12:08:11Z"
}, {
  "taskTitle": "moisturizing anti-bacterial hand soap",
  "project": "Tri-Coastal Design Company Inc.",
  "created": "2018-05-05T15:47:35Z",
  "ended": "2018-04-20T08:55:00Z"
}]

// z.forEach((item) => {
// 	x.saveTask(item);
// })
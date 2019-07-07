export default async (request) => {
	let collection = await request.get();
	let data = [];

	collection.forEach(row => data.push({id:row.id,...row.data()}));
	return data;
}

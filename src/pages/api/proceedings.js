import proceedings from "@/data/proceedings";

export default function handler(req, res) {
	res.status(200).json(proceedings);
}

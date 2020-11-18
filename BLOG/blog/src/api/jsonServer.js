import axios from "axios";

export default axios.create({
	// Obtain this from ngrok, the URL will only last for 8 hours
	baseURL: "",
});

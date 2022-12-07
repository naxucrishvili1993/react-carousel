import image1 from "./photos/sign-in.svg";
import image2 from "./photos/password.svg";
import image3 from "./photos/get-started.svg";

const items = [
	{
		image: image1,
		text: "Sign in with Email or Phone Number",
		control: (
			<form action="#">
				<input type="text" placeholder="Email or phone number" />
				<button type="submit">Sign In</button>
			</form>
		),
	},
	{
		image: image2,
		text: "Enter the password",
		control: (
			<form action="#">
				<input type="password" placeholder="Password" />
				<button type="submit">Sign In</button>
			</form>
		),
	},
	{
		image: image3,
		text: "Smash the button below",
		control: <button className="last-btn">Get Started</button>,
	},
];

export default items;

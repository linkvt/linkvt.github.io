import { SiGithub, SiXing } from "@icons-pack/react-simple-icons";
import { Building, Mail, MapPin } from "lucide-react";
import { Link, type MetaFunction } from "react-router";
import LinkedInIcon from "~/assets/icons/linkedin.svg";
import profile from "~/assets/vincent.jpg?w=500x&format=webp";

export const meta: MetaFunction = () => {
	return [
		{ title: "Vincent Link - Home" },
		{
			name: "description",
			content:
				"Vincent Link - Software Engineer with a strong focus on AWS Cloud, Kubernetes and Go. Highly motivated to solve hard problems with simple solutions, mindset of automating everything.",
		},
	];
};

// eslint-disable-next-line
const dummySimpleIconsProps: any = {};

const socials = [
	{
		name: "Github",
		url: "https://github.com/linkvt",
		icon: <SiGithub {...dummySimpleIconsProps} />,
	},
	{
		name: "LinkedIn",
		url: "https://www.linkedin.com/in/vincent-link-72936a134/",
		icon: (
			<img
				alt="LinkedIn"
				src={LinkedInIcon}
				width={24}
				height={24}
				{...dummySimpleIconsProps}
			/>
		),
	},
	{
		name: "Xing",
		url: "https://www.xing.com/profile/Vincent_Link/",
		icon: <SiXing {...dummySimpleIconsProps} />,
	},
	{
		name: "Mail",
		url: "mailto:mail@linkvt.de",
		icon: (
			<Mail>
				<title>Mail</title>
			</Mail>
		),
	},
	{
		name: "raydak GmbH",
		url: "https://www.raydak.de",
		icon: (
			<Building>
				<title>raydak GmbH</title>
			</Building>
		),
	},
];

export default function Index() {
	return (
		<main className="bg-linear-to-tr flex h-full items-center justify-center from-teal-300 from-20% to-sky-400">
			<div className="flex flex-col items-center">
				<img
					src={profile}
					height={256} // prevent layout shift
					width={256} // prevent layout shift
					alt="Profile"
					className="h-full max-h-64 rounded-full"
				/>
				<div className="mt-4 text-5xl font-bold tracking-tight">
					Vincent Link
				</div>
				<div className="mt-2 text-2xl">
					Cloud-Native Infrastructure &amp; Platform Engineer
				</div>
				<div className="flex gap-4">
					<div className="flex items-center gap-1">
						<Building size={18}>
							<title>Working at</title>
						</Building>
						<span>raydak GmbH</span>
					</div>
					<div className="flex items-center gap-1">
						<MapPin size={18}>
							<title>Location</title>
						</MapPin>
						<span>Stuttgart</span>
					</div>
				</div>
				<div className="mt-6 flex gap-1">
					{socials.map((social) => (
						<Link
							className="flex items-center gap-1 rounded p-2 text-black hover:bg-black/10"
							to={social.url}
							target="_blank"
							rel="noopener noreferrer"
							key={social.url}
						>
							{social.icon}
							<span className="max-sm:hidden">{social.name}</span>
						</Link>
					))}
				</div>
			</div>
		</main>
	);
}

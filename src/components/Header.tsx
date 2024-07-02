import React from "react";
import Image from "next/image";
import heroImage from "@/../public/images/hero-img.jpg";
import { toast } from "sonner";

export const Header = () => {
	return (
		<header className="h-dvh mx-auto relative px-5 md:px-[70px] lg:px-[140px] md:pt-[44px]">
			<nav className="relative">
				<div className="flex items-center justify-between py-4">
					<a href="#">
						<p className="text-sm leading-[21px] font-bold tracking-[0.07px] text-white md:text-xl md:leading-[30px]">Kelana dalam</p>
					</a>
					<ul className="hidden lg:flex font-medium text-white gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
						<li>
							<a href="#" className="text-[#EBC353] font-semibold hover:font-semibold hover:text-[#EBC353]">
								Home
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:font-semibold hover:text-[#EBC353]"
								onClick={() =>
									toast.message(
										`Navigation Triggered!
`,
										{
											description: "You've clicked a link! Just a heads-up, this is a dummy website, so there's no navigation to other pages. Feel free to explore everything here!",
										}
									)
								}
							>
								Mission
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:font-semibold hover:text-[#EBC353]"
								onClick={() =>
									toast.message(
										`Navigation Triggered!
`,
										{
											description: "You've clicked a link! Just a heads-up, this is a dummy website, so there's no navigation to other pages. Feel free to explore everything here!",
										}
									)
								}
							>
								Timeline
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:font-semibold hover:text-[#EBC353]"
								onClick={() =>
									toast.message(
										`Navigation Triggered!
`,
										{
											description: "You've clicked a link! Just a heads-up, this is a dummy website, so there's no navigation to other pages. Feel free to explore everything here!",
										}
									)
								}
							>
								About
							</a>
						</li>
					</ul>
					<div className="flex gap-4">
						<a
							href="#"
							onClick={() =>
								toast.message(`Button Triggered!`, {
									description: "Thanks for showing interest! Just a reminder, this is a dummy website, so no real actions or involvement will take place. Have fun exploring!",
								})
							}
						>
							<div className="size-6 flex shrink-0 p-[6px] items-center justify-center rounded-full bg-[linear-gradient(163deg,_rgba(255,_255,_255,_0.22)_11.82%,_rgba(255,_255,_255,_0.00)_110.32%);] border border-white md:size-11">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 12" className="size-3 md:size-5">
									<path
										stroke="#fff"
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M1.495 2.437c.158-.263 1.03-1.215 1.651-1.186.186.016.35.127.484.258h0c.307.3 1.185 1.431 1.234 1.67.122.584-.575.92-.362 1.51.543 1.33 1.48 2.265 2.81 2.808.588.214.925-.483 1.51-.361.238.05 1.37.927 1.67 1.233v0c.13.133.242.298.258.484.023.655-.989 1.539-1.186 1.651-.465.334-1.072.328-1.812-.016-2.065-.86-5.365-4.097-6.24-6.24-.335-.736-.357-1.347-.017-1.811z"
										clipRule="evenodd"
									></path>
									<path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" d="M7.282 1.375a3.985 3.985 0 013.52 3.516M7.282 3.146a2.213 2.213 0 011.75 1.75"></path>
								</svg>
							</div>
						</a>
						<a href="#" className="lg:hidden">
							<div className="size-6 md:size-11 flex shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="size-full">
									<path stroke="#fff" strokeLinecap="round" strokeWidth="1.5" d="M3 7h18M3 12h18M3 17h18"></path>
								</svg>
							</div>
						</a>
					</div>
				</div>
			</nav>
			<div id="hero-content" className="flex flex-col gap-[3vh] md:gap-[9vh] items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:pt-[44px]">
				<div className="flex flex-col gap-[2vh] ">
					<div className="flex flex-col gap-1 md:gap-2 items-center">
						<div className="hidden md:flex items-center gap-1 md:gap-2 ">
							<div className="size-4 md:size-5 flex shrink-0">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20" className="size-full">
									<path
										stroke="#fff"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeOpacity="0.9"
										strokeWidth="1.5"
										d="M1.577 7.837H16.43M12.701 11.091h.008M9.004 11.091h.008M5.298 11.091h.008M12.701 14.33h.008M9.004 14.33h.008M5.298 14.33h.008M12.37 1.667v2.742M5.638 1.667v2.742"
									></path>
									<path
										stroke="#fff"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeOpacity="0.9"
										strokeWidth="1.5"
										d="M12.532 2.983H5.476c-2.447 0-3.976 1.364-3.976 3.87v7.541c0 2.545 1.529 3.94 3.976 3.94h7.048c2.455 0 3.976-1.371 3.976-3.877V6.853c.008-2.506-1.513-3.87-3.968-3.87z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
							<p className="leading-8 font-medium text-[#F4F3F0] text-nowrap text-xs md:text-base">June, 2 2022 - June, 9 2022</p>
						</div>
						<h1 className="text-5xl leading-[60px] font-medium text-center text-white md:text-[64px] md:leading-[104px] lg:text-[80px] text-nowrap">
							Kalimantan <br /> Jungle <br className="md:hidden" />{" "}
							<span className="relative bg-clip-text text-transparent bg-[linear-gradient(69deg,_#0D0D0D_31.16%,_rgba(13,_13,_13,_0.15)_134.93%)] before:content-[''] before:-z-10 before:bg-[linear-gradient(250deg,_#F8CE57_22.56%,_#C1A145_78.04%);] before:w-[277px] before:h-[64px] before:p-m-6 before:absolute before:left-1/2 before:top-1/2  before:-translate-x-1/2 before:-translate-y-1/2 before:md:w-[354px] before:md:h-[80px] before:lg:w-[444px] before:lg:h-[106px]">
								Expedition
							</span>
						</h1>
					</div>
					<p className="text-lg leading-8 text-center text-[#D9D9D9] ">
						<span className="font-medium text-white">Explore</span> the jungle interior of <br className="md:hidden" /> <span className="font-medium text-white">Kalimantan</span> to see and know more{" "}
						<br className=" hidden md:block" /> about the <span className="font-medium text-white">beauty</span> of <span className="font-medium text-white">flora and fauna.</span>
					</p>
				</div>
				<div className="flex flex-col gap-[10vh] items-center ">
					<a
						href="#"
						onClick={() =>
							toast.message(`Button Triggered!`, {
								description: "Thanks for showing interest! Just a reminder, this is a dummy website, so no real actions or involvement will take place. Have fun exploring!",
							})
						}
					>
						<div className="flex gap-[5px] items-center pb-1 border-b-2 hover:border-[#EBC353] transition-all duration-300">
							<p className="text-white">Get Involved</p>
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
								<path fill="#fff" d="M14.994 5.874c0-.457-.37-.83-.828-.832L7.506 5H7.5a.834.834 0 00-.005 1.667l4.632.029-6.883 6.882a.832.832 0 101.179 1.178l6.906-6.907.005 4.652A.834.834 0 0015 12.499l-.007-6.625z"></path>
							</svg>
						</div>
					</a>
					<a href="#" className="flex flex-col items-center gap-3">
						<div className="animate-bounce flex shrink-0 p-[10px] items-center justify-center rounded-full bg-[linear-gradient(163deg,_rgba(255,_255,_255,_0.22)_11.82%,_rgba(255,_255,_255,_0.00)_110.32%);] border border-white">
							<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
								<path
									stroke="#fff"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M10 18.334c3.442 0 6.25-2.809 6.25-6.25V7.917c0-3.442-2.808-6.25-6.25-6.25s-6.25 2.808-6.25 6.25v4.167c0 3.441 2.808 6.25 6.25 6.25z"
								></path>
								<path
									stroke="#fff"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="1.5"
									d="M10 9.167c-.692 0-1.25-.559-1.25-1.25V6.25C8.75 5.558 9.308 5 10 5c.683 0 1.25.558 1.25 1.25v1.667c0 .691-.567 1.25-1.25 1.25zM10 5V1.667"
								></path>
							</svg>
						</div>
						<p className="text-[13px] text-white">Scroll Down</p>
					</a>
				</div>
			</div>
			{/* background */}
			<div className="absolute size-full flex shrink-0 top-0 left-0 -z-50">
				<Image src={heroImage} width={1440} quality={100} alt="hero image" className="size-full object-cover custom-object-position" />
			</div>
			<div className="bg-opacity-5"></div>
		</header>
	);
};

import { FC } from "react"
import { Link } from "react-router-dom"
// @ts-ignore
import bannerVideo from "../../../assets/video/banner.mp4"
import { Button } from "../../atoms"

export const SearchWithBannerMolecules: FC = () => {
	return (
		<div className="relative flex items-center bg-cover h-80 md:h-96 lg:h-[400px] xl:h-[500px]">
			<video
				autoPlay
				loop
				muted
				src={bannerVideo}
				className="w-full h-full object-cover"
			/>
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-black flex items-center justify-center">
				<div className="text-white text-center max-w-md mx-auto p-4">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
						Начните свой БИЗНЕС с HorecaArt
					</h1>
					<p className="text-lg md:text-xl lg:text-2xl mb-8">
						Все быстро и качественно от прямых поставщиков
					</p>
					<Link to="/about-us">
						<Button type="button">Стать Партнером</Button>
					</Link>
				</div>
			</div>
		</div>
	)
}

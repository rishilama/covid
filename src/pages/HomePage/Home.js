import Hero from '../../components/Hero/Hero'
import Trackpage from '../../components/Trackpage/Trackpage'
import Precautions from '../../components/Precautions/Precautions'
import Symptoms from '../../components/Symptoms/Symptoms'
import Blogs from '../../components/Blogs/Blogs'
import cardData from '../../dummy data/SymptomsCardData'
import BlogData from '../../dummy data/BlogDummyData'

function Home() {
    return (
        <>
            <Hero />
			<Trackpage />
			<Precautions />
			<Symptoms symptomsData={cardData}/>
			<Blogs blogData={BlogData}/>
        </>
    )
}

export default Home

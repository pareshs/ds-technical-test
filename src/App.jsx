import Header from './components/Header';
import Banner from './components/Banner';
import CardData from './data/dsData';
import CardLists from './components/CardLists';

function App() {
    return (
        <>
            <Header />
            <Banner />
            <CardLists cardData={CardData} />;
        </>
    );
}

export default App;

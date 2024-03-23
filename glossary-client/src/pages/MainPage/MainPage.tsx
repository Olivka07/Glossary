import { Header } from '../../components/Header/Header';
import { CardsContainer } from '../../components/CardsContainer/CardsContainer';
import { ButtonToUp } from '../../components/ButtonToUp/ButtonToUp';
import { PAGES_ENUM } from '../../consts';

const MainPage = () => {
    return (
        <>
            <Header page={PAGES_ENUM.Main} />
            <main>
                <CardsContainer />
                <ButtonToUp />
            </main>
        </>
    );
};

export default MainPage;

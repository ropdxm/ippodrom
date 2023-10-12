import '../css/catalogue.css';
import cat_horses from '../assets/pexels-brian-60112.jpg';
import horse_item from '../assets/horse-item.jpg';
import HorseCard from './HorseCard';

const Catalogue = () => {
  return (
    <main>
      <section className="cat-intro-s">
        <img src={cat_horses} alt="cat-horse-img" className='cat-horse-img' />
        <div className='brown-overlay'></div>
        <div className='texts-intro'>
          <h1 className='home-h cat-fh'>Выберите лошадь</h1>
          <h2 className='home-h cat-sh'>Прогулка верхом на лошади — это возможность сбежать из реальности на несколько часов и насладиться тишиной и красотой природы вместе с животным, которое представляет из себя идеального спутника на этом пути. Не упускайте возможности испытать этот уникальный и незабываемый опыт.</h2>
        </div>
      </section>
      <section className='horse-catalogue'>
        <HorseCard title="Ахалтекинская" img={horse_item} description="Очень высокие, в холке доходят до 160см. Очень поджарые и напоминают гепардов." />
        <HorseCard title="Мустанг" img={horse_item} description='Стремительная, необузданная и вольная как ветер одичавшая домашняя лошадь' />
        <HorseCard title="Мустанг" img={horse_item} description='Стремительная, необузданная и вольная как ветер одичавшая домашняя лошадь' />
        <HorseCard title="Мустанг" img={horse_item} description='Стремительная, необузданная и вольная как ветер одичавшая домашняя лошадь' />
        <HorseCard title="Мустанг" img={horse_item} description='Стремительная, необузданная и вольная как ветер одичавшая домашняя лошадь' />
        <HorseCard title="Мустанг" img={horse_item} description='Стремительная, необузданная и вольная как ветер одичавшая домашняя лошадь' />
        <HorseCard title="Мустанг" img={horse_item} description='Стремительная, необузданная и вольная как ветер одичавшая домашняя лошадь' />
      </section>
    </main>
  )
}

export default Catalogue
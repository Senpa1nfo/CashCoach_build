import './Menu.sass';

const changeArea = (num: number) => {

    const btns = document.querySelectorAll('.menu__btn');
    const menu_btns = [
        document.querySelector('.list'),
        document.querySelector('.stats'),
        document.querySelector('.calculator')
    ];

    switch (num) {
        case 1:
            menu_btns.forEach((element, index) => {
                index === 0 ? element?.classList.remove('none') : element?.classList.add('none');
            })

            btns.forEach((element, index) => {
                index === 0 ? element.classList.add('menu__btn__active') : element.classList.remove('menu__btn__active');
            })
            break;
        case 2:
            menu_btns.forEach((element, index) => {
                index === 1 ? element?.classList.remove('none') : element?.classList.add('none');
            })

            btns.forEach((element, index) => {
                index === 1 ? element.classList.add('menu__btn__active') : element.classList.remove('menu__btn__active');
            })
            break;
        case 3:
            menu_btns.forEach((element, index) => {
                index === 2 ? element?.classList.remove('none') : element?.classList.add('none');
            })

            btns.forEach((element, index) => {
                index === 2 ? element.classList.add('menu__btn__active') : element.classList.remove('menu__btn__active');
            })
            break;
    }
}

const Menu = () => {
    return(
        <div className='menu'>
            <button className="menu__btn menu__btn__active" onClick={() => changeArea(1)}>Історія</button>
            <button className="menu__btn" onClick={() => changeArea(2)}>Статистика</button>
            <button className="menu__btn" onClick={() => changeArea(3)}>Калькулятор</button>
        </div>      
    )
}

export default Menu;
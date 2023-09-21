import './bathroom.css';

//bathroom info component
function BathroomInfo(props) {
    return (
        <div className='bathroomItems'>
            <div className={props.className}></div>
            <h1 className='bathroomTitle'>{props.title}</h1>
        </div>
    )
}

function BathroomPage() {
    return (
        <>
            <BathroomInfo className='bathroom1' title='Toilet' />
            <BathroomInfo className='bathroom2' title='Toilet & Bath' />
            <BathroomInfo className='laundry' title='Laundry' />
        </>
    );
}

export default BathroomPage
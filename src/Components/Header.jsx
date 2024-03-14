import profile from '../../src/assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-4 mx-4 border bottom-b-2'>
            <h1 className="text-3xl text-black">Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;
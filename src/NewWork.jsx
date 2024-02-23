import arrPic from './Allpic';
import Sum from './Jeton';

function CreateNewWork({ arr, setArr, jetons, setJetons }) {


    const handlePlayClick = () => {
        if(jetons > 0) {
        const selected = [];
        while (selected.length < 4) {
            const ran = Math.floor(Math.random() * arrPic.length);
            const randomImage = arrPic[ran];
            selected.push(randomImage);
        }
        setArr(selected);
        
        let total = jetons;
        if(arr.every(e => e === arr[0])) {
            total += 20
            setJetons(total)
        } else {
            total -=20
            setJetons(total)
        }
    }
    };

    return (
        <div className="net_work">
            <div className="total">
                <h2>ЖЕТОНИ</h2>
                <Sum jetons={jetons} setJetons={setJetons}/>
            </div>
            <div className={`play ${jetons === 0 ? 'disabled' : ''}`} onClick={handlePlayClick}>Грати</div>
        </div>
    );
}

export default CreateNewWork;

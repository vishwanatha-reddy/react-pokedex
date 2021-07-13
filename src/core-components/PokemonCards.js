import React from 'react'
import './components.css'
import { setPokemonList } from '../actions/pokemonActions';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const PokemonCards = (props) => {

    const [statusBbsaur, setStatusBbsaur] = useState(true);
    const [statusIvy, setStatusIvy] = useState(true);
    const [statusBdrill, setStatusBdrill] = useState(true);
    const [statusRaichu, setStatusRaichu] = useState(true);

    //modal toggle state variable
    const [toggle, setToggle] = useState(false);
    //attribute search state variable
    const [attributeName, setAttributeName] = useState('');

    //attribute checkbox state variables set 1
    const [selectAll, setSelectAll] = useState(true);
    const [weakness, setWeakness] = useState(true);
    const [type, setType] = useState(true);
    const [weight, setWeight] = useState(true);
    const [abilities, setAbilities] = useState(true);

    //attribute checkbox state variables set 2
    const [selectAttrAll, setSelectAttrAll] = useState(true);
    const [weaknessAttr, setWeaknessAttr] = useState(true);
    const [typeAttr, setTypeAttr] = useState(true);
    const [weightAttr, setWeightAttr] = useState(true);
    const [abilitiesAttr, setAbilitiesAttr] = useState(true);

    const pokemonList = useSelector((store) => {
        return store.pokemons;
    })

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPokemonList())
    }, [])



    const handleClick = (pname) => {
        if (pname == 'Bulbasaur') {
            setStatusBbsaur(!statusBbsaur);
        } else if (pname == 'Ivysaur') {
            setStatusIvy(!statusIvy);
        } else if (pname == 'Beedrill') {
            setStatusBdrill(!statusBdrill);
        } else if (pname == 'Raichu') {
            setStatusRaichu(!statusRaichu);
        }
    }

    const pokemonStatus = [statusBbsaur, statusIvy, statusBdrill, statusRaichu];


    //function to dynamically updated the comparison list 
    const comparisonList = () => {
        return pokemonList.filter((pokemon, i) => {
            if (pokemonStatus[i]) {
                return pokemon;
            }
        })
    }
    // console.log(comparisonList())

    //modal toggle
    const handleToggle = () => {
        setToggle(!toggle);
    }

    const handleAttributeName = (e) => {
        const attrName = e.target.value;
        setAttributeName(attrName);
    }

    const handleSelectAllCheckbox = (e) => {
        const input = e.target.checked;
        setSelectAttrAll(input);
        setWeaknessAttr(input);
        setTypeAttr(input);
        setAbilitiesAttr(input);
        setWeightAttr(input);
    }

    const handleAttributesCheckbox = (e) => {
        if (e.target.name === "Weakness") {
            const input = e.target.checked;
            setWeaknessAttr(input);
        } else if (e.target.name === "Type") {
            const input = e.target.checked;
            setTypeAttr(input);
        } else if (e.target.name === "Abilities") {
            const input = e.target.checked;
            setAbilitiesAttr(input);
        } else if (e.target.name === "Weight") {
            const input = e.target.checked;
            setWeightAttr(input);
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectAll(selectAttrAll);
        setWeakness(weaknessAttr);
        setType(typeAttr);
        setAbilities(abilitiesAttr);
        setWeight(weightAttr);
        setToggle(!toggle);
    }

    const checkBoxNames =  ["Weakness", "Type", "Abilities", "Weight"];
      
    const checkBoxStates =[weaknessAttr, typeAttr, abilitiesAttr, weightAttr]

    const comparisonListState = [abilities, type, weakness, weight];

    return (
        <div >
            <div className="wrapper">
                {pokemonList.length && pokemonList.map((pokemon) => {
                    return <div key={pokemon.id} className="card mx-1" style={{ width: '20rem' }}>
                        <img src={pokemon.image} width="100" height="100" />
                        <div className="info">
                            <h1 >{pokemon.name}</h1>
                            <a href="#" className="btn" onClick={() => { handleClick(pokemon.name) }}>{pokemonStatus[pokemon.id - 1] ? "Remove" : "Compare"}</a>
                            <hr />
                            <p style={{ marginTop: '5rem', marginLeft: '2rem' }}><strong>{pokemon.type[0]}</strong> | <strong>{pokemon.type[1]}</strong></p>
                        </div>
                    </div>
                })}
            </div>
            <div className="mt-3">
                <ul className="list-group d-inline-block" style={{ width: '7rem' }}>
                    <li className="list-group-item bg-light">Attributes <a href="#" onClick={handleToggle}>Edit</a></li>
                    {abilities && <li className="list-group-item">Abilities</li>}
                    {type && <li className="list-group-item">Type</li>}
                    {weakness && <li className="list-group-item">Weakness</li>}
                    {weight && <li className="list-group-item">Weight</li>}
                </ul>
                {pokemonList.length > 0 && comparisonList().map(({ name, id, abilities, type, weakness, weight }) => {
                    return <ul key={id} className="list-group d-inline-block " style={{ width: '12rem' }}>
                        <li className="list-group-item bg-light" style={{ height: '4rem' }}>{name}<a className="d-block" style={{ textDecoration: 'none', color: '#F8F9FA' }}>Dummy</a></li>
                        {comparisonListState[0] && <li className="list-group-item">{abilities.length > 0 ? (abilities[0]) : ''}</li>}
                        {comparisonListState[1] && <li className="list-group-item">{type[0]}, {type[1]}</li>}
                        {comparisonListState[2] && <li className="list-group-item">{weakness[0]}, {weakness[1]}</li>}
                        {comparisonListState[3] && <li className="list-group-item">{weight}</li>}
                    </ul>
                })
                }
            </div>

            {/*modal*/}
            <Modal isOpen={toggle} className="test w-25">
                <ModalBody>
                    <form onSubmit={handleSubmit} >
                        <div className="mb-3 mx-auto my-4 d-inline-block w-100 " >
                            <h3>Edit Atributes</h3>
                            <input type="text" className="form-control ml-3 "
                                name="attributeName"
                                value={attributeName}
                                onChange={handleAttributeName} placeholder="Search Attributes" />
                        </div>
                        <ul style={{ listStyle: 'none' }}>
                            <input
                                name="Select all"
                                type="checkbox"
                                checked={selectAttrAll}
                                onChange={handleSelectAllCheckbox} />{' '}<label>Select All</label><br />
                            {
                                checkBoxNames.map((name, i) => {
                                    return <><input key={i}
                                        name={name}
                                        type="checkbox"
                                        checked={checkBoxStates[i]}
                                        onChange={handleAttributesCheckbox} />{' '}<label>{name}</label><br /></>
                                })
                            }
                        </ul>
                        <input type="submit" className="btn btn-primary btn-sm btn-block w-100" value="Apply" />
                    </form>
                </ModalBody>

            </Modal>
            {/* end of modal*/}
        </div>
    )
}

export default PokemonCards

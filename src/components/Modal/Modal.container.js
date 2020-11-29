import React from 'react';
import { useQuery, gql, useMutation } from '@apollo/client';
import Modal from './Modal.component.jsx';
const LIST_SALE_REGIONS = gql`
    query ListSaleRegions {
        listSaleRegions {
            _id
            name
        }
        region @client
    }
`;

const CHOOSE_REGION = gql`
    mutation ChooseRegion($region: SaleRegion!){
        ChooseRegion(region: $region) @client
    }
`;
const ModalContainer = () => {
    const { data, loading, error } = useQuery(LIST_SALE_REGIONS);
    const [setRegion] = useMutation(CHOOSE_REGION);

    if(loading) {
        return <p>Loading..</p>
    }
    if(error){
        return <p>We have an error...</p>
    }
    
    const handleChooseRegion = region => {
        console.log(region);
        setRegion({variables: {region}})
            .then(()=>{
                console.log('set region success')
            })
            .catch(e => {
                console.log('could not set region')
            })
    }
    const {listSaleRegions} = data;
    console.log("====================== Region ======================")
    console.log(data)
    const isChoosen = data.region ? true : false
    return <Modal isChoosen={isChoosen} regions={listSaleRegions} chooseRegion={handleChooseRegion} />
}

export default ModalContainer;
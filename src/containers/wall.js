import React from 'react';

import WallComponent from '../components/wall';

const user = {
    firstName: "Jean-Eudes",
    lastName: "Michel",
}
const thumbnail = 'https://pbs.twimg.com/profile_images/3534728581/00470e6eb887565abad7215f693e646b_400x400.jpeg';
const image = 'https://www.citationbonheur.fr/wp-content/uploads/2018/09/L_influence_du_paysage_sur_le_bonheur.jpg';

const publication ={
    user,
    thumbnail,
    image,
}

class Wall extends React.Component{
    state={
        publications: [publication],
    }
    
    render(){
        return (
            <WallComponent publications={this.state.publications} onClick={this.handleClick}/>
        );
    }
    add(){
        this.setState({
            publications: this.state.publications.concat([publication])
        })
    }
    handleClick= () => {
        this.add();
    }
}

export default Wall;
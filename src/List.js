import React from 'react';
import './style.css';

class List extends  React.Component{

    constructor() {
        super();
        this.onChangeFilterText = this.onChangeFilterText.bind(this);
    }

    state = {
        filterText : ""
    };

    onChangeFilterText(e){
        this.setState(
            {
            filterText : e.target.value
            }
        )
    }

    render() {

        const filteredContacts = this.props.contacts.filter(
            contact => {
                return ( contact.name.toString().toLowerCase().indexOf(this.state.filterText) !== -1 )
            }
        );

        return (
            <div>
                <input
                    id="filter"
                    name="filter"
                    value={this.state.filterText}
                    onChange={this.onChangeFilterText}
                    placeholder="Filtre"/>

                <ul className="list">
                    {filteredContacts.map(contact =>
                    <li key={contact.phone}>
                        <span className="left">{contact.name}</span>
                        <span className="right">{contact.phone}</span>
                        <br/><hr/>
                    </li>
                    )}
                </ul>
            </div>
        );
    }
}
export default List;
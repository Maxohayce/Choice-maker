import React from 'react';

class Choicelist extends React.Component {
    constructor (props) {
        super(props);
    }

    render() {
        return (<div className="choice-list">
                    <header>
                        <h1>Welcome to Our choice-list</h1>
                        <p>Here is a question and some options</p>
                    </header> 

                    <section>
                        <label for="question">{this.props.quest}</label>
                        <select name>
                            <options value="">{this.props.option1}</options>
                            <options value="">{this.props.option2}</options>
                            <options value="">{this.props.option3}</options>
                            <options value="">{this.props.option4}</options>
                        </select>
                    </section>
                </div>
        )
    }
}

export default Choicelist;
import { Broadcasting } from "invirtu-react-widgets";
import { Component, Fragment } from "react";
import Header from "../../component/layout/header";
import VideoSection from "../../component/section/video";
import Requests from "../../util/Requests";
import withRouter from "../../util/withRouter";

class StreamsWatchPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            errors: {},
            broadcast_widget: ''
        };
    }

    componentDidMount() {

        let id = this.props.router.params.id;

        Requests.userMe().then(response => {

            let userData = response.data;

            Requests.eventsView(id).then(response => {

                if (response.data.invirtu_id) {
                    this.setState({ broadcast_widget: <Broadcasting id={response.data.invirtu_id} auth_token={userData.invirtu_user_jwt_token} /> })
                }
            }).catch(error => {
                console.log(error);
            });

        }).catch(error => {
            console.log(error);
        });
    }

    render() {

        return (
            <Fragment>
                <Header />
                <section className="about-section">
                    <div className="container">
                        <div className="section-wrapper padding-top">
                            <div className="row">
                                <div className="col-12">
                                    {this.state.broadcast_widget}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Fragment>
        );
    }

}

export default withRouter(StreamsWatchPage);
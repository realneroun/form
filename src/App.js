import "./App.css";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txtname: "",
      txtpass: "",
      txttextarea: "",
      sltGender : 1,
      lang:"vn",
      chkbStatus : "true"
    };
    this.onHandleChange=this.onHandleChange.bind(this);
    this.onHandleSubmit=this.onHandleSubmit.bind(this);
  }

  onHandleChange(event){
    console.log(event.target.value)
    var target = event.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name] : value
    })
  }

  onHandleSubmit(event){
    event.preventDefault();
    console.log(this.state);
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="mb-3">
              <form>
                <div className="form-group">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" name="txtname" onChange={this.onHandleChange} value={this.state.txtname} />

                  <label className="form-label">Password</label>
                  <input type="text" className="form-control" name="txtpass" onChange={this.onHandleChange} />

                  <label className="form-label">TextArea</label>
                  <textarea className="form-control" name="txttextarea" onChange={this.onHandleChange} />

                  <label >Giới tính</label>
                  <select name="sltGender" onChange={this.onHandleChange} value={this.state.sltGender}>
                    <option value={0}>Nữ</option>
                    <option value={1}>Nam</option>
                  </select>
                  <label >Ngôn ngữ</label>
                  <div className="radio">
                    <label>
                      <input type="radio" name="lang" value='vn' onChange={this.onHandleChange} checked={this.state.lang === 'vn'}/>
                      Tiếng Việt
                    </label>
                    <label>
                      <input type="radio" name="lang" value='en' onChange={this.onHandleChange} checked={this.state.lang === 'en'}/>
                      English
                    </label>
                  </div>
                </div>
                <div className="checkbox">
                  <label>
                  <input type="checkbox" name="chkbStatus" onChange={this.onHandleChange} checked={this.state.chkbStatus === 'true'} />
                    Trạng thái</label>
                </div>
                <button type="submit" onClick={this.onHandleSubmit}>Save</button>
                <button type="submit">Xoa</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

var UrlBox = React.createClass({
  render: function () {
    var urlItems = [];
    for (var i = 0; i < 100; i++) {
      urlItems.push(<UrlItem key={i}/>)
    }
    return (
      <div>
        <ul className="n-main">{urlItems}</ul>
        <ToTop/>
        <AddUrl/>
      </div>
    );
  }
});

var UrlItem = React.createClass({

  render: function () {
    return (
      <li className="n-main-item">
        <a href="http://www.baidu.com" target="_blank">
          <img src="https://ss0.bdstatic.com/l4oZeXSm1A5BphGlnYG/icon/93364.png" alt=""/>
        Google</a>
      </li>
    );
  }
});

var Header = React.createClass({
  toggleAddUrlBox: function (e) {
    alert(1);
  },
  render: function () {
    return (
      <header className="n-header">
        <form className="n-form" action="http://www.baidu.com/s">
          <input className="n-inputbox search" type="text" autofocus="" name="wd"/>
          <input className="n-inputbotton search" type="submit" value="搜索"/>
          <label className="n-label" for="google">
            <input className="n-radio" type="radio" value="google" name="se" id="google"/>
          Google</label>
          <label className="n-label" for="baidu">
            <input className="n-radio" type="radio" value="baidu" name="se" id="baidu" />
          Baidu</label>
        </form>
        <button className="addbutton" onClick={this.toggleAddUrlBox}>
          <i className="fa fa-plus-circle"></i>
        </button>
      </header>
    )
  }
});

var ToTop = React.createClass({
  scrollToTop: function (e) {
    var app = document.getElementById('app');
    var toTop = function () {
      if (app.scrollTop - 20 <= 0) {
        app.scrollTop = 0;
      } else {
        app.scrollTop -= 20;
        requestAnimationFrame(toTop);
      }
    };
    requestAnimationFrame(toTop);
  },
  render: function () {
    return (
      <button className="totop" onClick={this.scrollToTop}>
        <i className="fa fa-arrow-up"></i>
      </button>
    )
  }
});

var AddUrl = React.createClass({
  getInitialState: function () {
    return {}
  },
  render: function () {
    return (
      <div className="pop">
        <form action="">
          <div>
            <input className="n-inputbox " type="text" placeholder="书签名"/>
          </div>
          <div>
            <input className="n-inputbox " type="text" placeholder="书签地址"/>
          </div>
          <div>
            <input className="n-inputbox " type="text" placeholder="书签Icon"/>
          </div>
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <UrlBox/>
      </div>
    )
  }
});

React.render(
  <App/>, document.getElementById('app')
);



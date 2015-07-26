var UrlBox = React.createClass({
  render: function () {
    var urlItems = [];
    for (var i = 0; i < 100; i++) {
      urlItems.push(<UrlItem key={i}/>)
    }
    return (
      <div><ul className="n-main">{urlItems}</ul><ToTop/><AddUrl/></div>
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
  render: function () {
    return (
      <header className="n-header">
        <form className="n-form" action="http://www.baidu.com/s">
          <input className="n-inputbox search" type="text" autofocus="" name="wd"/>
          <input className="n-inputbotton search" type="submit" value="搜索"/>
          <label className="n-label" for="google"><input className="n-radio" type="radio" value="google" name="se" id="google" onClick={this.a}/>Google</label>
          <label className="n-label" for="baidu"><input className="n-radio" type="radio" value="baidu" name="se" id="baidu" />Baidu</label>
        </form>
        <button className="addbutton"><i className="fa fa-plus-circle"></i></button>
      </header>
    )
  },
  a: function(e) {
    e.stopPropagation();
    console.log(e);
  }
});

var ToTop = React.createClass({
  render: function () {
    return (
      <button className="totop"><i className="fa fa-arrow-up"></i></button>
    )
  }
});

var AddUrl = React.createClass({
  render: function () {
    return (
      <div className="pop">
        <form action="">
          <div><input className="n-inputbox " type="text" placeholder="书签名"/></div>
          <div><input className="n-inputbox " type="text" placeholder="书签地址"/></div>
          <div><input className="n-inputbox " type="text" placeholder="书签ICON"/></div>
          <button type="submit">添加</button>
        </form>
      </div>
    )
  }
});

React.render(
  <Header/>, document.getElementById('header')
);

React.render(
  <UrlBox/>, document.getElementById('urlbox')
);


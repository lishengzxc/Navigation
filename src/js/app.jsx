var UrlBox = React.createClass({
  render: function () {
    var urlItems = [];
    for (var i = 0; i < 100; i++) {
      urlItems.push(<UrlItem key={i}/>)
    }
    return (
      <ul className="n-main">{urlItems}</ul>
    );
  }
});

var UrlItem = React.createClass({
  render: function () {
    return (
      <li className="n-main-item">
        <a href="http://www.baidu.com">
          <img src="https://ss0.bdstatic.com/l4oZeXSm1A5BphGlnYG/icon/93364.png" alt=""/>
        baidu</a>
      </li>
    );
  }
});

var Header = React.createClass({
  render: function () {
    return (
      <header className="n-header">
        <form className="n-form" action="">
          <input className="n-inputbox search" type="text" autofocus=""/>
          <input className="n-inputbotton search" type="submit" value="搜索"/>
        </form>
      </header>
    )
  }
});

React.render(
  <Header/>, document.getElementById('header')
);

React.render(
  <UrlBox/>, document.getElementById('urlbox')
);

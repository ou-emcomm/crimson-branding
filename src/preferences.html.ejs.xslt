<% if (process.env.NODE_ENV === 'production') { %>
  <html>
    <head>
    </head>
    <body>
      <div id="portal-copy"></div></body>
      </html>
    <%} else { %>
      <!DOCTYPE html>
      <html xmlns="http://www.w3.org/1999/xhtml">
        <head>
          <link href="//fw.cdn.technolutions.net/framework/base.css?v=20210624" rel="stylesheet">
            <link href="//crimson-ou-edu.cdn.technolutions.net/shared/base.css" rel="stylesheet"></head>
            <body>
              <div id="nav"></div>
              <div id="content"><div id="portal-copy"></div></div>
              <div id="footer"></div>
            </body>
          </html>
        <%}%>

<% if (process.env.NODE_ENV === 'production') { %><?xml version="1.0" encoding="utf-8" ?>
  <xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:fw="http://technolutions.com/framework" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xhtml">
  <xsl:template match="/">
<%}%>
  <html xmlns="http://www.w3.org/1999/xhtml">
    <% if (process.env.NODE_ENV === 'production') { %>
      <template path="/shared/base.xslt" xmlns="http://technolutions.com/framework" />
    <%}%>
    <head>
            <% if (process.env.NODE_ENV === 'production') {%>
      <xsl:apply-templates select="xhtml:html/xhtml:head/node()" />
       <% }  else { %>
         <link href="//fw.cdn.technolutions.net/framework/base.css?v=20210624" rel="stylesheet">
         <link href="//crimson-ou-edu.cdn.technolutions.net/shared/base.css" rel="stylesheet">
         <% } %>
    </head>
    <body>
      <div id="nav"></div>
      <div id="content">
        <% if (process.env.NODE_ENV === 'production') { %>
        <xsl:copy-of select="xhtml:html/xhtml:body/@*" />
        <xsl:apply-templates select="xhtml:html/xhtml:body/node()" />
        <% } else { %>
        <div id="form_696e0bbe-3c41-4779-ab4b-4332e0c79d12">Loading...</div>
        <script
          async="async"
          src="https://crimson.ou.edu/register/?id=696e0bbe-3c41-4779-ab4b-4332e0c79d12&amp;output=embed&amp;div=form_696e0bbe-3c41-4779-ab4b-4332e0c79d12"
        >
          /**/
        </script>
        <% } %>
      </div>
      <div id="footer"></div>
    </body>
    </html>
  <% if (process.env.NODE_ENV === 'production') { %>
    </xsl:template>
    <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()" />
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
<%}%>

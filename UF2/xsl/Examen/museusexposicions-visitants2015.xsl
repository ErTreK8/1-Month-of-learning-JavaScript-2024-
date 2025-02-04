<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
    <xsl:output method="html" version="5.0" encoding="UTF-8"/>
    <xsl:template match="/">
        
        <html>
            <head>
                
                <link rel="stylesheet" href="estil.css" type="text/css" />
                
                <title>Museus Exposicions 2015</title>
            </head>
            <body>
                <h1>Museus Exposicions 2015</h1>
                
                <xsl:for-each select="xml/museusexposicions-visitants">
                    <xsl:if test="Visitants>100000">
                        <p><xsl:value-of select="Equipament"/>: <xsl:value-of select="Visitants"/></p>
                    </xsl:if>
                </xsl:for-each>
                
                <p><b>Eric Garcia Gispert</b></p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>


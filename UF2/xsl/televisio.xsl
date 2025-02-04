<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
    <xsl:output method="html" version="5.0" encoding="UTF-8"/>
    <xsl:template match="/">
        
        <html>
            <body>
                <h1><xsl:value-of select="TVSCHEDULE/@NAME"/></h1>
                <xsl:for-each select="TVSCHEDULE/CHANNEL">
                    <h2><xsl:value-of select="/TVSCHEDULE/@NAME"/> Channel <xsl:value-of select="@CHAN"/></h2>
                    <h3><xsl:value-of select="BANNER"/></h3>
                    <xsl:for-each select="DAY">
                        <h4><xsl:value-of select="DATE"/></h4>
                        <xsl:for-each select="PROGRAMSLOT">
                            <div><a><xsl:value-of select="TIME"/></a> 
                                <a><xsl:value-of select="TITLE"/></a> 
                                <a style="font-weight: bold; font-style: italic;"><xsl:value-of select="DESCRIPTION"/></a></div>
                        </xsl:for-each>
                    </xsl:for-each>
                </xsl:for-each>
            </body>
        </html> 
    </xsl:template>
</xsl:stylesheet>
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
        <xsl:output method="html" version="5.0" encoding="UTF-8"/>
        <xsl:template match="/">
            
            <html>
                <head>
                    
                    <link rel="stylesheet" href="estil.css" type="text/css" />
                    
                    <title>Mi primer XSL</title>
                </head>
                <body>
                    <h1>Titol: <xsl:value-of select="catalog/cd/title"/></h1>
                    
                    <hr/>
                    <p><strong>IMPORTANT!</strong>  Ara has d'afegir la resta de dades del xml !!</p>
        
                    <table>
                        <xsl:for-each select="catalog/cd">
                            
                            <tr style="border: solid 1px black"> 
                                <td>
                                    <xsl:value-of select="title"/>
                                </td>
                                <td>
                                    <xsl:value-of select="country"/> 
                                </td>
                                <td>
                                    <xsl:value-of select="company"/> 
                                </td>
                                <td>
                                    <xsl:value-of select="price"/> €
                                </td>
                                <td>
                                    <xsl:value-of select="year"/> 
                                </td>
                            </tr>
                   </xsl:for-each>
                   </table>
    </body>
    </html>
    </xsl:template>
    
    <xsl:template match="catalog">
        <xsl:apply-templates/>
    </xsl:template>
    <xsl:template match="CD">
        <xsl:apply-templates/>
    </xsl:template>
</xsl:stylesheet>


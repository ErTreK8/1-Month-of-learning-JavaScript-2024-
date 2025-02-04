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
                <table>
                    <tr style="border: solid 1px black">
                        <td>
                            <b>Aparcamiento</b>
                        </td>
                        <td>
                            <b>Direccion</b>
                        </td>
                        <td>
                            <b>Gestora</b>
                        </td>
                        <td>
                            <b>Plazas Totales</b>
                        </td>
                        <td>
                            <b>Plazas Libres</b>
                        </td>
                        <td>
                            <b>Tarifa mas Alta</b>
                        </td>
                        <td>
                            <b>Tarifa Maxima Diaria</b>
                        </td>
                    </tr>
                    <xsl:for-each select="APARCAMIENTOS/APARCAMIENTO">
                    <tr style="border: solid 1px black">
                        <td>
                            <xsl:value-of select="NOMBRE"/>
                        </td>
                        <td>
                            <xsl:value-of select="DIRECCION"/>
                        </td>
                        <td>
                            <xsl:value-of select="GESTORA"/>
                        </td>
                        <td>
                            <xsl:value-of select="PLAZAS/TOTAL"/>
                        </td>
                        <td>
                            <xsl:value-of select="PLAZAS/LIBRES"/>
                        </td>
                        <td>
                            <xsl:for-each select="TARIFAS">
                                <xsl:if test="RANGO/CODIGO=1">
                                    <xsl:value-of select="RANGO/IMPORTE"/>
                                </xsl:if>
                            </xsl:for-each>
                        </td>
                        <td>
                            <xsl:value-of select="TARIFAS/PRECIO_MAXIMO_DIARIO"/>
                        </td>    
                    </tr>
                    </xsl:for-each>
                </table>
                <p><b>Eric Garcia Gispert</b></p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>


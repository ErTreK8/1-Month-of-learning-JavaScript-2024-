<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"> 
    <xsl:output method="html" version="5.0" encoding="UTF-8"/>
    <xsl:template match="/">
        
        <html>
            <head>
                
                <link rel="stylesheet" href="estil.css" type="text/css" />
                
                <title>6Nations</title>
            </head>
            <body>
                <h1>Resum dels Partits</h1>
                
                <div>
                    <xsl:for-each select="competition/round/match">
                        <p><xsl:value-of select="@data"/></p>
                        <P>Partit numero <xsl:value-of select="@num"/></P>    
                        <p>Equip | Equip</p> 
                        <p><xsl:value-of select="summary/team[1]/@name"/>   |   <xsl:value-of select="summary/team[2]/@name"/></p>
                        <p><xsl:value-of select="summary/team[1]/@score"/>   |   <xsl:value-of select="summary/team[2]/@score"/></p>
                        <p>------------------------------</p>
                    </xsl:for-each>
                </div>
                
                <h2>Millors Jugadors</h2>
                <div>
                    <ul>
                        <xsl:for-each select="competition/round/match/summary/team/scorecard/name">
                            <xsl:if test="@points>12">
                                <li>
                                    <p><xsl:value-of select="."/> (<xsl:value-of select="ancestor::team/@name"/>: <xsl:value-of select="@points"/>)</p>
                                </li>
                            </xsl:if>
                        </xsl:for-each>
                    </ul>
                </div>
                
                <h2>Millors Entrenadors</h2>
                <div class="best-coaches">
                    <ul>
                        <xsl:for-each select="competition/round/match/summary/team">
                            <xsl:if test="@score>20">
                                <li>
                                    <p><xsl:value-of select="trainer"/> (Punts: <xsl:value-of select="@score"/>)</p>
                                </li>
                            </xsl:if>
                        </xsl:for-each>
                    </ul>
                </div>
                <p>Eric Garcia Gispert</p>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>


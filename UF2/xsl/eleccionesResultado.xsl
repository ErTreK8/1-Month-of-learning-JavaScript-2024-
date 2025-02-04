<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
	<body>
	<xsl:for-each select="/escrutinio_sitio">
		<h4>Resultado elecciones autonómicas <xsl:value-of select="nombre_sitio"/> &#160; <xsl:value-of select="convocatoria"/> </h4>
		<table border="1">
			<tr>
				<th align="right">Votos contabilizados</th>
				<td><xsl:value-of select="votos/contabilizados/cantidad"/></td>
				<td><xsl:value-of select="votos/contabilizados/porcentaje"/>%</td>
			</tr>
			<tr>
				<th align="right">Abstenciones</th>
				<td><xsl:value-of select="votos/abstenciones/cantidad"/></td>
				<td><xsl:value-of select="votos/abstenciones/porcentaje"/>%</td>
			</tr>
			<tr>
				<th align="right">Votos nulos</th>
				<td><xsl:value-of select="votos/nulos/cantidad"/></td>
				<td><xsl:value-of select="votos/nulos/porcentaje"/>%</td>
			</tr>
			<tr>
				<th align="right">Votos blancos</th>
				<td><xsl:value-of select="votos/blancos/cantidad"/></td>
				<td><xsl:value-of select="votos/blancos/porcentaje"/>%</td>
			</tr>
		</table>
		</xsl:for-each>
		<table>
		<xsl:for-each select="escrutinio_sitio/resultados/partido">
			
			<tr style="border: solid 1px black"> 
				<td>
				<xsl:value-of select="nombre"/>
			</td>
				<td>
					<xsl:value-of select="votos_porciento"/> %
				</td>
			</tr>
			
			
		</xsl:for-each>
		</table>
	</body>
</html>
</xsl:template>
</xsl:stylesheet>
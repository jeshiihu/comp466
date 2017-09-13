<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="header">
		<html>
			<body>
				<h1 style="display:inline;">Resume | </h1>
				<h1 style="display:inline;">
					<xsl:value-of select="name"/>
				</h1><br/>

				<xsl-foreach select="address/.">
						<xsl:value-of select="address/."/> 
				</xsl-foreach><br/>
				<xsl-foreach select="contact/.">
						<xsl:value-of select='contact/.'/>
				</xsl-foreach>
				<hr style="clear:both;"/><br/>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="section">
		<html>
			<body>
				<h2><xsl:value-of select="@type"/></h2><br/>
			</body>
		</html>
	</xsl:template>

	<xsl:template match="section[@type='Academic Education']">
		<html>
			<body>
				<xsl-foreach select="/.">
					<xsl:value-of select="/."/>
				</xsl-foreach>
			</body>
		</html>
	</xsl:template>

</xsl:stylesheet>

<!-- <xsl-foreach select="movie"> -->
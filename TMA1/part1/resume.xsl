<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	
	<!-- HEADER TEMPLATE -->
	<xsl:template name='header' match="header">
		<h1 style="display:inline;">Resume | </h1>
		<h1 style="display:inline;">
			<xsl:value-of select="name"/>
		</h1><br/>
		<xsl:value-of select="address/."/><br/>
		<xsl:value-of select='contact/.'/>
		<hr style="clear:both;"/><br/>
	</xsl:template>

	<!-- SECTION & SUBSECTION TITLES -->
	<xsl:template name="sections" match='section/title'>
		<h2><xsl:value-of select='.'/></h2>
	</xsl:template>

	<xsl:template name="subSections" match='subSection/title'>
		<h3><xsl:value-of select='.'/></h3>
	</xsl:template>

	<xsl:template name="bullets" match='bullet'>
		<li><xsl:value-of select='.'/></li>
	</xsl:template>

	<!-- EDUCATION -->
	<xsl:template name="school" match='institution'>
		<h3><xsl:value-of select='.'/></h3>
	</xsl:template>

	<xsl:template name="program" match='program'>
		<xsl:value-of select='.'/>
		<xsl:text>, </xsl:text>
		<xsl:value-of select='program'/>
	</xsl:template>

	<!-- WORK EXPERIENCE -->
	<xsl:template name="employers" match='employer'>
		<h4><xsl:for-each select="company | addr">
			<xsl:if test="position() != 1">, </xsl:if>
			<xsl:value-of select="."/>
		</xsl:for-each></h4>

		<h5 style='display:inline'><xsl:value-of select='role'/></h5>
		<h5 style='display:inline'><xsl:text> | </xsl:text></h5>
		<h5 style='display:inline'><xsl:value-of select='timeframe'/></h5>

		<xsl:for-each select='responsibilities/bullet'>
			<li><xsl:value-of select='.'/></li>
		</xsl:for-each>
	</xsl:template>

	<xsl:template name='programmingAchievements' match='subSection/project'>
		<h4><xsl:value-of select='name'/></h4>
		<li>
			<xsl:value-of select='company'/>
			<xsl:text>, </xsl:text>
			<xsl:value-of select='datetime'/>
			<xsl:text> - </xsl:text>
			<xsl:value-of select='duration'/>
		</li>
		<li>
			<xsl:text>Acknowledgements: </xsl:text>
			<xsl:value-of select='acknowledgements'/>
		</li>
		<li>
			<xsl:value-of select='note'/>
		</li>
	</xsl:template>

</xsl:stylesheet>


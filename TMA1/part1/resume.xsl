<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:output method = "html" doctype-system = "about:legacy-compat" />
	<xsl:template match = "/">
		<html xmlns = "http://www.w3.org/1999/xhtml">
			<head>
				<meta charset="utf-8"/>
				<link rel ="stylesheet" type="text/css" href="../main.css"/>
				<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Lato:900"/>
				<title>COMP466: Assignment 1 Part 1</title>
			</head>
			<body>
				<div id="page" class="banner">
					<div class="content">
						<ul>
							<li><a href="../tma1.htm">Assignment</a></li>
							<li class="active"><a href="resume.xml" class="active">Resume</a></li>
						</ul>
					</div>
				</div>

				<div class="initial">
					<h1 id="title">Resume | </h1>
					<h1 id="subTitle"><xsl:value-of select="resume/header/name"/></h1>
					<p class="blurb">This part of the assignment shows my developement in transforming my resume to an xml format</p>
				</div>

				<xsl:value-of select="resume/header/address/."/><br/>
				<xsl:value-of select="resume/header/contact/."/>
				<hr style="clear:both;"/><br/>

				<!-- SECTION & SUBSECTION -->
				<xsl:for-each select="resume/body/section">
					<h2><xsl:value-of select='./title'/></h2>
					<ul>
						<xsl:for-each select="./bullet">
							<li><xsl:value-of select='.'/></li>
						</xsl:for-each>
					</ul>

					<!-- SUBSECTIONS -->
					<xsl:for-each select="./subSection">
						<h3><xsl:value-of select='./title'/></h3>
						<ul>
							<xsl:for-each select="./bullet">
								<li><xsl:value-of select='.'/></li>
							</xsl:for-each>
						</ul>

						<!-- PROJECT ACHIEVEMENTS -->
						<xsl:for-each select="./project">
							<h4 class="tabbed"><xsl:value-of select='./name'/></h4>
							<ul class="tabbed">
								<li class="tabbed">
									<xsl:value-of select='./company'/>
									<xsl:text>, </xsl:text>
									<xsl:value-of select='./datetime'/>
									<xsl:text> - </xsl:text>
									<xsl:value-of select='./duration'/>
								</li>
								<li class="tabbed">
									<xsl:text>Acknowledgements: </xsl:text>
									<xsl:value-of select='/acknowledgements'/>
								</li>
								<li class="tabbed"><xsl:value-of select='./note'/></li>
							</ul>
						</xsl:for-each>
					</xsl:for-each>

					<!-- EDUCATION -->
					<h3><xsl:value-of select='./institution'/></h3>
					<p class="tabbed">
						<xsl:value-of select='./program'/>
						<xsl:value-of select='./degree'/>
						<xsl:value-of select='./gradyear'/>
					</p>

					<!-- JOB EXPERIENCE -->
					<xsl:for-each select="./employer">
						<h4 style='display:inline'>
							<xsl:for-each select="./company | ./addr">
								<xsl:if test="position() != 1">, </xsl:if>
								<xsl:value-of select="."/>
							</xsl:for-each>
							<xsl:text> ||</xsl:text>
						</h4>

						<h5 style='display:inline'><xsl:value-of select='./role'/></h5>
						<h5 style='display:inline'><xsl:text> | </xsl:text></h5>
						<h5 style='display:inline'><xsl:value-of select='./timeframe'/></h5>

						<ul>
							<xsl:for-each select='./responsibilities/bullet'>
								<li><xsl:value-of select='.'/></li>
							</xsl:for-each>
						</ul>
					</xsl:for-each>
				</xsl:for-each>
			</body>
		</html>
	</xsl:template>
</xsl:stylesheet>


<%@ Assembly Name="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
   <%@ Page Language="C#" Inherits="Microsoft.SharePoint.WebPartPages.WikiEditPage"
      MasterPageFile="~masterurl/default.master" MainContentID="PlaceHolderMain"
      meta:progid="SharePoint.WebPartPage.Document" meta:webpartpageexpansion="full" %>
      <%@ Import Namespace="Microsoft.SharePoint.WebPartPages" %>
         <%@ Register Tagprefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls"
            Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
            <%@ Register Tagprefix="Utilities" Namespace="Microsoft.SharePoint.Utilities"
               Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
               <%@ Import Namespace="Microsoft.SharePoint" %>
                  <%@ Assembly
                     Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
                     %>
                     <%@ Register Tagprefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages"
                        Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c"
                        %>
                        <asp:Content ContentPlaceHolderId="PlaceHolderPageTitle" runat="server">
                           <SharePoint:ProjectProperty Property="Title" runat="server" /> -
                           <SharePoint:ListItemProperty runat="server" />
                        </asp:Content>
                        <asp:Content ContentPlaceHolderId="PlaceHolderPageImage" runat="server">
                           <SharePoint:AlphaImage ID=onetidtpweb1 Src="/_layouts/15/images/wiki.png?rev=23" Width=145
                              Height=54 Alt="" Runat="server" />
                        </asp:Content>
                        <asp:Content ContentPlaceHolderId="PlaceHolderAdditionalPageHead" runat="server">
                           <meta name="CollaborationServer" content="SharePoint Team Web Site" />
                           <SharePoint:ScriptBlock runat="server">
                              var navBarHelpOverrideKey = &quot;WSSEndUser&quot;;
                           </SharePoint:ScriptBlock>
                           <SharePoint:RssLink runat="server" />
                        </asp:Content>
                        <asp:Content ContentPlaceHolderId="PlaceHolderMiniConsole" runat="server">
                           <SharePoint:FormComponent TemplateName="WikiMiniConsole" ControlMode="Display" runat="server"
                              id="WikiMiniConsole" />
                        </asp:Content>
                        <asp:Content ContentPlaceHolderId="PlaceHolderLeftActions" runat="server">
                           <SharePoint:RecentChangesMenu runat="server" id="RecentChanges" />
                        </asp:Content>
                        <asp:Content ContentPlaceHolderId="PlaceHolderMain" runat="server">
                           <span id="wikiPageNameDisplay" style="display: none;" runat="server">
                              <SharePoint:ListItemProperty runat="server" />
                           </span>
                           <span style="display:none;" id="wikiPageNameEdit" runat="server">
                              <asp:TextBox id="wikiPageNameEditTextBox" runat="server" />
                           </span>
                           <SharePoint:VersionedPlaceHolder UIVersion="4" runat="server">
                              <SharePoint:SPRibbonButton id="btnWikiEdit"
                                 RibbonCommand="Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.Edit"
                                 runat="server" Text="edit" />
                              <SharePoint:SPRibbonButton id="btnWikiSave"
                                 RibbonCommand="Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.SaveAndStop"
                                 runat="server" Text="edit" />
                              <SharePoint:SPRibbonButton id="btnWikiRevert"
                                 RibbonCommand="Ribbon.WikiPageTab.EditAndCheckout.SaveEdit.Menu.SaveEdit.Revert"
                                 runat="server" Text="Revert" />
                           </SharePoint:VersionedPlaceHolder>
                           <SharePoint:EmbeddedFormField id="WikiField" FieldName="WikiField" ControlMode="Display"
                              runat="server">
                              <div class="ExternalClassE84536DB4BB44523B24E83BBAB2D96BF">
                                 <table id="layoutsTable" style="width&#58;100%;">
                                    <tbody>
                                       <tr style="vertical-align&#58;top;">
                                          <td style="width&#58;100%;">
                                             <div class="ms-rte-layoutszone-outer" style="width&#58;100%;">
                                                <div class="ms-rte-layoutszone-inner" aria-label="Rich text editor">
                                                   <div id="wrapper">
                                                      <div id="left-wrap">


                                                         <WebPartPages:ContentEditorWebPart runat="server"
                                                            __MarkupType="xmlmarkup" WebPart="true"
                                                            __WebPartId="{DB484F62-FA42-482F-AD08-E851BBF8F7A2}">
                                                            <WebPart xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                                                               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                                               xmlns="http://schemas.microsoft.com/WebPart/v2">
                                                               <Title>CheckOut - Navigation</Title>
                                                               <FrameType>None</FrameType>
                                                               <Description>Allows authors to enter rich text content.
                                                               </Description>
                                                               <IsIncluded>true</IsIncluded>
                                                               <PartOrder>1</PartOrder>
                                                               <FrameState>Normal</FrameState>
                                                               <Height />
                                                               <Width />
                                                               <AllowRemove>true</AllowRemove>
                                                               <AllowZoneChange>true</AllowZoneChange>
                                                               <AllowMinimize>true</AllowMinimize>
                                                               <AllowConnect>true</AllowConnect>
                                                               <AllowEdit>true</AllowEdit>
                                                               <AllowHide>true</AllowHide>
                                                               <IsVisible>true</IsVisible>
                                                               <DetailLink />
                                                               <HelpLink />
                                                               <HelpMode>Modeless</HelpMode>
                                                               <Dir>Default</Dir>
                                                               <PartImageSmall />
                                                               <MissingAssembly>Cannot import this Web Part.
                                                               </MissingAssembly>
                                                               <PartImageLarge>/_layouts/images/mscontl.gif
                                                               </PartImageLarge>
                                                               <IsIncludedFilter />
                                                               <ExportControlledProperties>true
                                                               </ExportControlledProperties>
                                                               <ConnectionID>00000000-0000-0000-0000-000000000000
                                                               </ConnectionID>
                                                               <ID>g_f6c6278d_0d72_474a_91a9_dfbfd680423c</ID>
                                                               <ContentLink
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor">
                                                                  /sites/cs/CICO/SiteAssets/nav-Contractor-Checkout.html
                                                               </ContentLink>
                                                               <Content
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
                                                               <PartStorage
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
                                                            </WebPart>
                                                         </WebPartPages:ContentEditorWebPart>





                                                         <WebPartPages:ContentEditorWebPart runat="server"
                                                            __MarkupType="xmlmarkup" WebPart="true"
                                                            __WebPartId="{EFCD0716-ECD0-4488-991C-6E3C80313CC9}">
                                                            <WebPart xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                                                               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                                               xmlns="http://schemas.microsoft.com/WebPart/v2">
                                                               <Title>G6 - Reporting</Title>
                                                               <FrameType>None</FrameType>
                                                               <Description>Allows authors to enter rich text content.
                                                               </Description>
                                                               <IsIncluded>true</IsIncluded>
                                                               <PartOrder>2</PartOrder>
                                                               <FrameState>Normal</FrameState>
                                                               <Height />
                                                               <Width />
                                                               <AllowRemove>true</AllowRemove>
                                                               <AllowZoneChange>true</AllowZoneChange>
                                                               <AllowMinimize>true</AllowMinimize>
                                                               <AllowConnect>true</AllowConnect>
                                                               <AllowEdit>true</AllowEdit>
                                                               <AllowHide>true</AllowHide>
                                                               <IsVisible>true</IsVisible>
                                                               <DetailLink />
                                                               <HelpLink />
                                                               <HelpMode>Modeless</HelpMode>
                                                               <Dir>Default</Dir>
                                                               <PartImageSmall />
                                                               <MissingAssembly>Cannot import this Web Part.
                                                               </MissingAssembly>
                                                               <PartImageLarge>/_layouts/images/mscontl.gif
                                                               </PartImageLarge>
                                                               <IsIncludedFilter>;;;;G6 Admins</IsIncludedFilter>
                                                               <ExportControlledProperties>true
                                                               </ExportControlledProperties>
                                                               <ConnectionID>00000000-0000-0000-0000-000000000000
                                                               </ConnectionID>
                                                               <ID>g_386ccb5b_6ca0_4988_8d14_5aeee05c8b9b</ID>
                                                               <ContentLink
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
                                                               <Content
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor">
                                                                  <![CDATA[<h3>G6 Reporting<br/></h3> 
<ul> 
   <li> 
   </li>
   <li>
      <a href="/sites/cs/CICO/SitePages/G6%20TODO%20Contractors.aspx" target="_blank">
		G6 Items Still to Complete</a><br/></li> 
   <li> 
   </li>
</ul>]]>
                                                               </Content>
                                                               <PartStorage
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
                                                            </WebPart>
                                                         </WebPartPages:ContentEditorWebPart>





                                                         <WebPartPages:ContentEditorWebPart runat="server"
                                                            __MarkupType="xmlmarkup" WebPart="true"
                                                            __WebPartId="{692CEEED-A28B-4357-AB63-C7B19793F1DE}">
                                                            <WebPart xmlns:xsd="http://www.w3.org/2001/XMLSchema"
                                                               xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                                                               xmlns="http://schemas.microsoft.com/WebPart/v2">
                                                               <Title>Help - Navigation</Title>
                                                               <FrameType>None</FrameType>
                                                               <Description>Allows authors to enter rich text content.
                                                               </Description>
                                                               <IsIncluded>true</IsIncluded>
                                                               <PartOrder>3</PartOrder>
                                                               <FrameState>Normal</FrameState>
                                                               <Height />
                                                               <Width />
                                                               <AllowRemove>true</AllowRemove>
                                                               <AllowZoneChange>true</AllowZoneChange>
                                                               <AllowMinimize>true</AllowMinimize>
                                                               <AllowConnect>true</AllowConnect>
                                                               <AllowEdit>true</AllowEdit>
                                                               <AllowHide>true</AllowHide>
                                                               <IsVisible>true</IsVisible>
                                                               <DetailLink />
                                                               <HelpLink />
                                                               <HelpMode>Modeless</HelpMode>
                                                               <Dir>Default</Dir>
                                                               <PartImageSmall />
                                                               <MissingAssembly>Cannot import this Web Part.
                                                               </MissingAssembly>
                                                               <PartImageLarge>/_layouts/images/mscontl.gif
                                                               </PartImageLarge>
                                                               <IsIncludedFilter />
                                                               <ExportControlledProperties>true
                                                               </ExportControlledProperties>
                                                               <ConnectionID>00000000-0000-0000-0000-000000000000
                                                               </ConnectionID>
                                                               <ID>g_d103b9d4_310b_4dc0_9762_72a4c84ad00d</ID>
                                                               <ContentLink
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor">
                                                                  /sites/cs/CICO/SiteAssets/nav-Help.html</ContentLink>
                                                               <Content
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
                                                               <PartStorage
                                                                  xmlns="http://schemas.microsoft.com/WebPart/v2/ContentEditor" />
                                                            </WebPart>
                                                         </WebPartPages:ContentEditorWebPart>



                                                         <WebPartPages:ScriptEditorWebPart runat="server" Content="&lt;link href=&quot;https://mcscviper.usmc.mil/Scripts/css/bootstrap-custom.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;link href=&quot;https://mcscviper.usmc.mil/Scripts/css/jquery.dataTables.min.css&quot; rel=&quot;stylesheet&quot;&gt;
&lt;link href=&quot;https://mcscviper.usmc.mil/Scripts/css/dataTables.tableTools.min.css&quot; rel=&quot;stylesheet&quot;&gt;

&lt;style&gt;
	* {
		box-sizing:content-box!important;
	}
#Hero-WPQ5 {
display:none
}
&lt;/style&gt;
&lt;script&gt;
$(document).ready(function() {
$( &quot;#WebPartWPQ4 a&quot; ).attr(&quot;target&quot;,&quot;_blank&quot;).removeAttr(&quot;onclick&quot;);
   });
&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot;
	src=&quot;/sites/cs/CICO/SiteAssets/apps/CICO%20Modifications/js/ctr-ogp-checkout/views/changeName.js&quot;&gt;&lt;/script&gt;
" ChromeType="None" Description="Allows authors to insert HTML snippets or scripts." Title="Script Editor"
                                                            ID="g_d998872e_1bd6_4f07_80cb_836e335bc39d"
                                                            __MarkupType="vsattributemarkup"
                                                            __WebPartId="{DC7D2451-080C-48BD-AA04-46DD75ADD429}"
                                                            WebPart="true" __designer:IsClosed="false">
                                                         </WebPartPages:ScriptEditorWebPart>





                                                      </div>
                                                      <div id="right-wrap" style="width&#58;1138px;height&#58;416px;">
                                                         <p class="long-line">
                                                            All Completed&nbsp;Check-Outs</p>
                                                         <p class="subtitle">Contractor/Other
                                                            Government Personnel (OGP)</p>
                                                         <p class="subtitle">
                                                            <span style="text-decoration&#58;underline;">
                                                               <a href="/sites/cs/CICO">
                                                                  <span style="text-decoration&#58;underline;">
                                                                     <font color="#0066cc">Home </font>
                                                                  </span></a>&gt;
                                                               <a
                                                                  href="/sites/cs/CICO/SitePages/Contractor%20Check%20Out.aspx">
                                                                  <span style="text-decoration&#58;underline;">
                                                                     <font color="#0066cc"> Contractor/OGP Check Out
                                                                     </font>
                                                                  </span></a>
                                                               &gt; All Completed Check-outs</span>
                                                         </p>
                                                         <div class="ms-rtestate-read ms-rte-wpbox">
                                                            <div
                                                               class="ms-rtestate-notify  ms-rtestate-read 700f7da5-9ebe-40cf-a9c6-0d6b40366a3b"
                                                               id="div_700f7da5-9ebe-40cf-a9c6-0d6b40366a3b"
                                                               unselectable="on"></div>
                                                            <div id="vid_700f7da5-9ebe-40cf-a9c6-0d6b40366a3b"
                                                               unselectable="on" style="display&#58;none;"></div>
                                                         </div>
                                                         <WebPartPages:XsltListViewWebPart runat="server" ViewFlag=""
                                                            ViewSelectorFetchAsync="False" InplaceSearchEnabled="False"
                                                            ServerRender="False" ClientRender="True"
                                                            InitialAsyncDataFetch="False"
                                                            WebId="00000000-0000-0000-0000-000000000000"
                                                            IsClientRender="False" GhostedXslLink="main.xsl"
                                                            NoDefaultStyle=""
                                                            ViewGuid="{E6D06B53-B270-4EBF-B707-28E33B3C0E99}"
                                                            EnableOriginalValue="False" ViewContentTypeId="" ListUrl=""
                                                            ListDisplayName=""
                                                            ListName="{0D2A763B-D94B-41BF-9D4F-FDC84E07AEEE}"
                                                            ListId="0d2a763b-d94b-41bf-9d4f-fdc84e07aeee" PageSize="-1"
                                                            UseSQLDataSourcePaging="True" DataSourceID=""
                                                            ShowWithSampleData="False" AsyncRefresh="False"
                                                            ManualRefresh="False" AutoRefresh="False"
                                                            AutoRefreshInterval="60" Title="Contractor Check Out"
                                                            FrameType="None" SuppressWebPartChrome="False"
                                                            Description="" IsIncluded="True" ZoneID="wpz" PartOrder="0"
                                                            FrameState="Normal" AllowRemove="True"
                                                            AllowZoneChange="True" AllowMinimize="True"
                                                            AllowConnect="True" AllowEdit="True" AllowHide="True"
                                                            IsVisible="True"
                                                            CatalogIconImageUrl="/_layouts/15/images/itgen.png?rev=23"
                                                            TitleUrl="/sites/cs/CICO/Lists/Contractor Check Out"
                                                            DetailLink="/sites/cs/CICO/Lists/Contractor Check Out"
                                                            HelpLink="" HelpMode="Modeless" Dir="Default"
                                                            PartImageSmall=""
                                                            MissingAssembly="Cannot import this Web Part."
                                                            PartImageLarge="/_layouts/15/images/itgen.png?rev=23"
                                                            IsIncludedFilter="" ExportControlledProperties="False"
                                                            ConnectionID="00000000-0000-0000-0000-000000000000"
                                                            ID="g_da382c4c_814d_4d5f_8330_1290ee563035"
                                                            ChromeType="None" __MarkupType="vsattributemarkup"
                                                            __WebPartId="{E6D06B53-B270-4EBF-B707-28E33B3C0E99}"
                                                            __AllowXSLTEditing="true"
                                                            __designer:CustomXsl="fldtypes_Ratings.xsl" WebPart="true"
                                                            Height="" Width="">
                                                            <ParameterBindings>
                                                               <ParameterBinding Name="dvt_sortdir"
                                                                  Location="Postback;Connection" />
                                                               <ParameterBinding Name="dvt_sortfield"
                                                                  Location="Postback;Connection" />
                                                               <ParameterBinding Name="dvt_startposition"
                                                                  Location="Postback" DefaultValue="" />
                                                               <ParameterBinding Name="dvt_firstrow"
                                                                  Location="Postback;Connection" />
                                                               <ParameterBinding Name="OpenMenuKeyAccessible"
                                                                  Location="Resource(wss,OpenMenuKeyAccessible)" />
                                                               <ParameterBinding Name="open_menu"
                                                                  Location="Resource(wss,open_menu)" />
                                                               <ParameterBinding Name="select_deselect_all"
                                                                  Location="Resource(wss,select_deselect_all)" />
                                                               <ParameterBinding Name="idPresEnabled"
                                                                  Location="Resource(wss,idPresEnabled)" />
                                                               <ParameterBinding Name="NoAnnouncements"
                                                                  Location="Resource(wss,noXinviewofY_LIST)" />
                                                               <ParameterBinding Name="NoAnnouncementsHowTo"
                                                                  Location="Resource(wss,noXinviewofY_DEFAULT)" />
                                                            </ParameterBindings>
                                                            <DataFields>
                                                            </DataFields>
                                                            <XmlDefinition>
                                                               <View Name="{E6D06B53-B270-4EBF-B707-28E33B3C0E99}"
                                                                  MobileView="TRUE" Type="HTML" Hidden="TRUE"
                                                                  DisplayName=""
                                                                  Url="/sites/cs/CICO/SitePages/Completed Contractor Check-outs.aspx"
                                                                  Level="1" BaseViewID="1" ContentTypeID="0x"
                                                                  ImageUrl="/_layouts/15/images/generic.png?rev=23">
                                                                  <Query>
                                                                     <OrderBy>
                                                                        <FieldRef Name="Modified" Ascending="FALSE" />
                                                                     </OrderBy>
                                                                     <Where>
                                                                        <IsNotNull>
                                                                           <FieldRef Name="PlannedExitDate" />
                                                                        </IsNotNull>
                                                                     </Where>
                                                                  </Query>
                                                                  <ViewFields>
                                                                     <FieldRef Name="LinkTitleNoMenu" />
                                                                     <FieldRef Name="LastName" />
                                                                     <FieldRef Name="FirstName" />
                                                                     <FieldRef Name="Source" />
                                                                     <FieldRef Name="Organization" />
                                                                     <FieldRef Name="WorkSection" />
                                                                     <FieldRef Name="PlannedExitDate" />
                                                                  </ViewFields>
                                                                  <RowLimit Paged="TRUE">30</RowLimit>
                                                                  <Aggregations Value="Off" />
                                                                  <JSLink>clienttemplates.js</JSLink>
                                                                  <XslLink Default="TRUE">main.xsl</XslLink>
                                                                  <Toolbar Type="Standard" />
                                                               </View>
                                                            </XmlDefinition>
                                                         </WebPartPages:XsltListViewWebPart>





                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table><span id="layoutsData" style="display&#58;none;">
                                    false,false,1</span>
                              </div>
                           </SharePoint:EmbeddedFormField>
                           <WebPartPages:WebPartZone runat="server" ID="Bottom" CssClass="ms-hide" Title="loc:Bottom">
                              <ZoneTemplate></ZoneTemplate>
                           </WebPartPages:WebPartZone>
                        </asp:Content>
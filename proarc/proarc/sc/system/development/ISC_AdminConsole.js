
/*

  SmartClient Ajax RIA system
  Version v11.0p_2016-10-20/LGPL Development Only (2016-10-20)

  Copyright 2000 and beyond Isomorphic Software, Inc. All rights reserved.
  "SmartClient" is a trademark of Isomorphic Software, Inc.

  LICENSE NOTICE
     INSTALLATION OR USE OF THIS SOFTWARE INDICATES YOUR ACCEPTANCE OF
     ISOMORPHIC SOFTWARE LICENSE TERMS. If you have received this file
     without an accompanying Isomorphic Software license file, please
     contact licensing@isomorphic.com for details. Unauthorized copying and
     use of this software is a violation of international copyright law.

  DEVELOPMENT ONLY - DO NOT DEPLOY
     This software is provided for evaluation, training, and development
     purposes only. It may include supplementary components that are not
     licensed for deployment. The separate DEPLOY package for this release
     contains SmartClient components that are licensed for deployment.

  PROPRIETARY & PROTECTED MATERIAL
     This software contains proprietary materials that are protected by
     contract and intellectual property law. You are expressly prohibited
     from attempting to reverse engineer this software or modify this
     software for human readability.

  CONTACT ISOMORPHIC
     For more information regarding license rights and restrictions, or to
     report possible license violations, please contact Isomorphic Software
     by email (licensing@isomorphic.com) or web (www.isomorphic.com).

*/

if(window.isc&&window.isc.module_Core&&!window.isc.module_AdminConsole){isc.module_AdminConsole=1;isc._moduleStart=isc._AdminConsole_start=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc._moduleEnd&&(!isc.Log||(isc.Log&&isc.Log.logIsDebugEnabled('loadTime')))){isc._pTM={message:'AdminConsole load/parse time: '+(isc._moduleStart-isc._moduleEnd)+'ms',category:'loadTime'};if(isc.Log&&isc.Log.logDebug)isc.Log.logDebug(isc._pTM.message,'loadTime');else if(isc._preLog)isc._preLog[isc._preLog.length]=isc._pTM;else isc._preLog=[isc._pTM]}isc.definingFramework=true;isc.defineClass("AdminConsole","TabSet");isc.A=isc.AdminConsole.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.paneMargin=0;isc.A.dbConfiguratorConstructor="DBConfigurator";isc.A.dsImporterConstructor="DSImporter";isc.A.serverLogViewerConstructor="ServerLogViewer";isc.A.databaseBrowserConstructor="DatabaseBrowser";isc.A.schedulerManagerConstructor="QuartzManager";isc.A.dataSourceNavigatorConstructor="DataSourceNavigator";isc.A.creatorName="adminConsole";isc.A.showDBConfigurator=true;isc.A.showDSImporter=true;isc.A.showServerLogViewer=true;isc.A.showDatabaseBrowser=true;isc.A.showSchedulerManager=true;isc.A.showOtherTools=true;isc.A.showDataSourceNavigator=true;isc.B.push(isc.A.initWidget=function isc_AdminConsole_initWidget(){this.Super("initWidget",arguments);this.dataSourceNavigator=this.createAutoChild("dataSourceNavigator",{mode:"adminConsole"});this.dbConfigurator=this.createAutoChild("dbConfigurator",{autoFetchData:false});this.dsImporter=this.createAutoChild("dsImporter");this.serverLogViewer=this.createAutoChild("serverLogViewer",{autoFetchData:false});this.databaseBrowser=this.createAutoChild("databaseBrowser",{autoFetchData:false,showHeader:false,canDragPosition:false,canDragResize:true,width:"100%",showSelectButton:false});this.schedulerManager=this.createAutoChild("schedulerManager",{autoFetchData:false});this.otherTools=isc.HTMLPane.create({width:"100%",height:"100%",contents:'<ul><li><a href="'+isc.Page.getToolsDir()+'visualBuilder/index.jsp" target="_blank">Visual Builder</a></li><li><a href="'+isc.Page.getToolsDir()+'bmmlImporter.jsp" target="_blank">Reify Mockup Importer</a></li><li><a href="'+isc.Page.getToolsDir()+'batchDSGenerator.jsp" target="_blank">Batch DataSource Generator</a></li></ul>'});this.dbConfigurator.onBrowseDatabaseClicked=function(_3){this.databaseBrowser.dbName=_3;this.databaseBrowser.getDatabaseTables();this.selectTab("databaseBrowser")}.bind(this);this.tabSelected=function(_3,_4,_5,_6,_7){isc.History.addHistoryEntry(_6.ID)};if(this.showDBConfigurator){this.addTab({ID:"dbConfigurator",title:"Database Configuration",pane:this.dbConfigurator,tabSelected:function(){if(this.dbConfigurator.dbList&&this.dbConfigurator.dbList.getTotalRows()===0)
{this.dbConfigurator.getDefinedDatabases()}}.bind(this)})}
if(this.showDataSourceNavigator){this.addTab({ID:"dataSourceNavigator",title:"DataSources",pane:this.dataSourceNavigator,tabSelected:function(){}.bind(this)})}
if(this.showDSImporter){this.addTab({ID:"dsImporter",title:"Import DataSources",pane:this.dsImporter,tabSelected:function(){if(this.dsImporter.dsList&&this.dsImporter.dsList.getTotalRows()===0)
{this.dsImporter.getDefinedDataSources()}}.bind(this)})}
if(this.showServerLogViewer){this.addTab({ID:"serverLogViewer",title:"Server Logs",pane:this.serverLogViewer,tabSelected:function(){this.serverLogViewer.refreshLogList()}.bind(this)})}
if(this.showDatabaseBrowser){this.addTab({ID:"databaseBrowser",title:"SQL Browser",pane:this.databaseBrowser,tabSelected:function(){if(this.databaseBrowser.databaseList&&this.databaseBrowser.databaseList.getTotalRows()===0)
{this.databaseBrowser.getDefinedDatabases()}}.bind(this)})}
if(this.showOtherTools){this.addTab({ID:"otherTools",title:"Other Tools",pane:this.otherTools})}
var _1=function(){var _2=isc.History.getCurrentHistoryId();if(_2){this.selectTab(_2)}else{this.selectTab(0)}}.bind(this);isc.History.registerCallback(_1)});isc.B._maxIndex=isc.C+1;isc.defineClass("DSImporter","VLayout");isc.A=isc.DSImporter.getPrototype();isc.A.dsListDefaults={_constructor:"ListGrid",sortFieldNum:0,showFilterEditor:true,autoFetchData:true,dataSource:isc.DataSource.create({clientOnly:true,fields:[{name:"dsName",title:"DataSource ID",width:"*"},{name:"dsType",title:"Type",width:100},{name:"testData",title:"Test Data",width:60}]}),contextMenu:{data:[{title:"Select All ",click:"target.selectAllRecords()"},{title:"DeSelect All",click:"target.deselectAllRecords()"},{isSeparator:true},{title:"Refresh",click:"target.dsImporter.getDefinedDataSources()"}]},selectionChanged:function(_1,_2){var _3=this.getSelection(),_4=this.creator.dsViewer;_4.setData(_3);if(_3&&_3.length>0){var _5=this.creator.dsContents;isc.DS.get(_3[0].dsName,function(_6){_5.setDataSource(_6);_5.fetchData(null,function(_7){if(_7.status<0){_5.setData([]);if((!_6||(_6.serverType!="sql"&&_6.serverType!="hibernate"))&&!_5.$90k)
{isc.say("Data fetch failed.  Note that this is normal and expected for non-SQL, non-Hibernate DataSources if you have not yet done the server-side work to connect to your data provider");_5.$90k=true}}},{willHandleError:true})});this.creator.dsActions.getButton(1).enable()}else{this.creator.dsActions.getButton(1).disable()}}};isc.A.dsListToolbarDefaults={_constructor:"ToolStrip",members:[{_constructor:"ToolStripButton",title:"Refresh",width:100,click:"this.parentElement.creator.getDefinedDataSources()"}]};isc.A.dsViewerDefaults={_constructor:"DetailViewer",recordsPerBlock:4,blockSeparator:"",canSelectText:true,overflow:"visible",emptyMessage:"Please select a DataSource",fields:[{name:"dsName",title:"DataSource ID"},{name:"dsType",title:"Type"},{name:"filename",title:"DataSource File"},{name:"testData",title:"Test Data"},{name:"testDataFilename",title:"Test Data File"}]};isc.A.dsContentsToolbarDefaults={_constructor:"ToolStrip",membersMargin:10,members:[{_constructor:"ToolStripButton",title:"Refresh",width:100,click:"this.parentElement.creator.dsContents.data.invalidateCache()"}]};isc.A.dsContentsDefaults={_constructor:"ListGrid",showFilterEditor:true,showHiddenFields:true,showCellContextMenus:true,canEdit:true,listEndEditAction:"next"};isc.A.dsOptionsDefaults={_constructor:"DynamicForm",fields:[{name:"currentDB",type:"blurb"},{name:"importTestData",type:"checkbox",title:"Import Test Data (if present)",defaultValue:true},{name:"replaceTables",type:"checkbox",title:"Generate (or replace) tables",defaultValue:true}]};isc.A.dsActionsDefaults={_constructor:"Toolbar",membersMargin:5,buttons:[{title:"Import",width:100,click:"this.parentElement.creator.verifyImportDataSources()"},{title:"Add Test Data",width:100,click:"this.parentElement.creator.addTestData()",disabled:true}]};isc.A=isc.DSImporter.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.creatorName="dsImporter";isc.B.push(isc.A.initWidget=function isc_DSImporter_initWidget(){this.Super("initWidget",arguments);this.dsList=this.createAutoChild("dsList");this.dsListToolbar=this.createAutoChild("dsListToolbar");this.dsViewer=this.createAutoChild("dsViewer");this.dsContentsToolbar=this.createAutoChild("dsContentsToolbar");this.dsContents=this.createAutoChild("dsContents");this.dsOptions=this.createAutoChild("dsOptions");this.dsActions=this.createAutoChild("dsActions");this.addMembers([isc.VLayout.create({autoDraw:false,height:"33%",showResizeBar:true,members:[this.dsList,this.dsListToolbar]}),isc.VLayout.create({autoDraw:false,members:[this.dsViewer,this.dsContentsToolbar,this.dsContents,this.dsOptions,this.dsActions]})])},isc.A.getDefinedDataSources=function isc_DSImporter_getDefinedDataSources(){isc.DMI.call({appID:"isc_builtin",className:"com.isomorphic.tools.BuiltinRPC",methodName:"getDefinedDataSources",callback:this.getID()+".populateDSList(data);",requestParams:{prompt:"Please wait - loading list of available DataSources.",showPrompt:true}})},isc.A.populateDSList=function isc_DSImporter_populateDSList(_1){this.dsList.getDataSource().setCacheData(_1);if(this.dsList.data)this.dsList.invalidateCache()},isc.A.verifyImportDataSources=function isc_DSImporter_verifyImportDataSources(){if(this.dsList.getSelection().length==0){isc.say("Please select a DataSource to work with first.");return}
var _1=this.dsOptions.getValues();if(_1.replaceTables&&this.dsList.getSelection().getProperty("dsType").contains("hibernate"))
{var _2="<font color='red'><b>WARNING: </b></font>Hibernate DataSources cannot be dropped and recreated individually. If you proceed, <b>ALL</b> of your Hibernate-managed tables will be dropped and recreated.  <b>Note that this even includes Hibernate-managed entities that have no corresponding DataSource and are not used by SmartClient at all!</b>";if(_1.importTestData)_2+="<p>Test data will also be imported for all Hibernate DataSources.";_2+="<p>Are you sure you want to continue?<p>";var _3=this;isc.ask(_2,function(_4){if(_4)_3.importDataSources()})}else{this.importDataSources()}},isc.A.importDataSources=function isc_DSImporter_importDataSources(){var _1=this.dsOptions.getValues();_1.dsList=this.dsList.getSelection().getProperty("dsName").getUniqueItems();isc.DMI.call({appID:"isc_builtin",className:"com.isomorphic.tools.AdminConsole",methodName:"importDataSources",callback:"isc.say(data)",arguments:[_1.dsList,_1.importTestData,_1.replaceTables],requestParams:{prompt:"Importing Datasource[s] - This may take a few minutes.",showPrompt:true}})},isc.A.addTestData=function isc_DSImporter_addTestData(){if(this.dsList.getSelection().length!=1){isc.say("Please select a DataSource to work with");return}
var _1=this.dsList.getSelection().getProperty("dsName")[0];var _2=isc.DataImportDialog.create({ID:"dataImportDialog",targetDataSource:_1});_2.show()});isc.B._maxIndex=isc.C+6;isc.defineClass("DBConfigurator","VLayout");isc.A=isc.DBConfigurator;isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.showWindow=function isc_c_DBConfigurator_showWindow(_1,_2){var _3=isc.ClassFactory.getClass(_1._constructor)||isc.Window;_3.create({title:"Database Configuration",width:"100%",height:"100%",canDragReposition:false,closeClick:function(){this.destroy()},items:[isc.DBConfigurator.create({autoDraw:false,autoFetchData:true},_2)]},_1).show()});isc.B._maxIndex=isc.C+1;isc.A=isc.DBConfigurator.getPrototype();isc.A.autoFetchData=true;isc.A.dbListDefaults={_constructor:"ListGrid",selectionType:"single",recordClick:function(_1,_2){this.creator.dbForm.setData(isc.clone(_2));this.creator.dbForm.show();this.creator.dbForm.markForRedraw()},contextMenu:{data:[{title:"Add New",click:"target.dbConfigurator.dbForm.clearValues()"},{isSeparator:true},{title:"Refresh",click:"target.dbConfigurator.getDefinedDatabases()"}]},fields:[{name:"dbName",title:"Database Name",formatCellValue:function(_1,_2,_3,_4,_5){var _6=_2.isDefault;return _6?"<b>"+_1+"</b> (default)":_1}},{name:"database_type",title:"Database type"},{name:"driver_serverName",title:"Server Name"},{name:"dbStatus",title:"Status"}]};isc.A.dbListButtonsDefaults={_constructor:"ToolStrip",members:[{_constructor:"ToolStripButton",title:"Refresh",width:100,overflow:"visible",height:20,click:"this.parentElement.dbConfigurator.getDefinedDatabases()"},{_constructor:"ToolStripButton",title:"Add New Configuration",width:150,overflow:"visible",height:20,click:"this.parentElement.dbConfigurator.dbForm.clearValues(); this.parentElement.dbConfigurator.dbForm.show()"},{_constructor:"ToolStripButton",title:"Set As Default Database",width:150,overflow:"visible",height:20,click:function(){var _1=this.parentElement.dbConfigurator.dbList.getSelectedRecord();if(_1)this.parentElement.dbConfigurator.setDefaultDB(_1.dbName);else isc.say("No configuration selected")}},{_constructor:"ToolStripButton",title:"Browse",width:150,overflow:"visible",height:20,click:"this.parentElement.dbConfigurator.browseDatabase()"},"starSpacer",{_constructor:"ToolStripButton",title:"Download server.properties",width:200,overflow:"visible",height:20,click:function(){isc.DS.load("Filesystem",this.parentElement.dbConfigurator.getID()+".downloadServerProperties()")}}]};isc.A.dbFormConstructor="DBForm";isc.A.dbFormButtonsDefaults={_constructor:"Toolbar",cellSpacing:10,buttons:[{title:"Test",width:100,click:"this.parentElement.dbConfigurator.testDB()"},{title:"Save",width:100,click:"this.parentElement.dbConfigurator.saveDB()"},{title:"Cancel",width:100,click:"this.parentElement.dbConfigurator.dbForm.clearValues()"}]};isc.A=isc.DBConfigurator.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.A.creatorName="dsConfigurator";isc.B.push(isc.A.initWidget=function isc_DBConfigurator_initWidget(){this.Super("initWidget",arguments);this.dbList=this.createAutoChild("dbList");this.dbListButtons=this.createAutoChild("dbListButtons",{dbConfigurator:this});this.dbForm=this.createAutoChild("dbForm");this.dbFormButtons=this.createAutoChild("dbFormButtons",{dbConfigurator:this});this.addMembers([isc.VLayout.create({autoDraw:false,showResizeBar:true,members:[this.dbList,this.dbListButtons]}),isc.VLayout.create({autoDraw:false,members:[this.dbForm,this.dbFormButtons]})]);if(this.autoFetchData){this.getDefinedDatabases()}},isc.A.browseDatabase=function isc_DBConfigurator_browseDatabase(){var _1=this.dbList.getSelectedRecord();if(!_1||!_1.dbName){isc.say("Please select a Database Configuration first");return}
if(this.onBrowseDatabaseClicked){this.onBrowseDatabaseClicked(_1.dbName)}},isc.A.downloadServerProperties=function isc_DBConfigurator_downloadServerProperties(){var _1="/WEB-INF/classes/server.properties",_2=isc.DataSource.getDataSource("Filesystem"),_3=this;_2.fetchData({path:_1},function(_4){_3.downloadServerPropertiesReply(_4.data)},{operationId:"loadFile"})},isc.A.downloadServerPropertiesReply=function isc_DBConfigurator_downloadServerPropertiesReply(_1){if(isc.isAn.Array(_1))_1=_1[0];isc.DMI.callBuiltin({methodName:"downloadClientContent",arguments:[_1.contents,"server.properties","text"],requestParams:{transport:"hiddenFrame",downloadResult:true,showPrompt:false}})},isc.A.getDefinedDatabases=function isc_DBConfigurator_getDefinedDatabases(){isc.DMI.call({appID:"isc_builtin",className:"com.isomorphic.tools.AdminConsole",methodName:"getDefinedDatabases",callback:this.getID()+".getDefinedDatabasesCallback(data)",arguments:[true],requestParams:{prompt:"Please wait - getting list and status of configured databases.",showPrompt:true,promptStyle:"dialog"}})},isc.A.getDefinedDatabasesCallback=function isc_DBConfigurator_getDefinedDatabasesCallback(_1){for(var i=0;i<_1.length;i++){if(_1[i].isDefault&&this.creator)this.creator.defaultDatabaseID=_1[i].dbName;if(_1[i]['driver_url']){_1[i].useURL=true;_1[i]["driver_serverName"]="Embedded in JDBC URL"}}
this.dbList.setData(_1)},isc.A.setDefaultDB=function isc_DBConfigurator_setDefaultDB(_1){isc.DMI.call({appID:"isc_builtin",className:"com.isomorphic.tools.AdminConsole",methodName:"setDefaultDB",arguments:[_1],callback:this.getID()+".setDefaultDBCallback(data)"})},isc.A.setDefaultDBCallback=function isc_DBConfigurator_setDefaultDBCallback(_1){isc.say("Default database is now: <b>"+_1+"<p><i>Please wait for the container to reload before continuing.<br>Note that you may need to explicitly restart your servlet engine if you encounter difficulty accessing this database.</i>")},isc.A.testDB=function isc_DBConfigurator_testDB(){if(!this.dbForm.validate())return;var _1=this.dbForm.getValue("dbName");var _2=this.dbForm.getValues();isc.DMI.call({appID:"isc_builtin",className:"com.isomorphic.tools.AdminConsole",methodName:"testDB",arguments:[_1,_2],callback:this.getID()+".testDBCallback(rpcResponse)",requestParams:{willHandleError:true}})},isc.A.testDBCallback=function isc_DBConfigurator_testDBCallback(_1){var _2=_1.data;var _3="<ol><li>Check that you have downloaded the appropriate JDBC driver for your database and installed it in WEB-INF/lib</li><li>Double-check the username, password, hostname and other details you have entered for typos</li><li>Check that the database user you specified has sufficient priveleges to create a table, drop a table and run a test query (such as 'select 1 from dual') in the database you're connecting to</li><li>Check that your database is configured to accept TCP/IP connections</li><li>If the database server is running on a different computer, check that it is configured to accept remote connections, and that the connection is not being blocked by a firewall</li><li>If using JNDI, try removing any prefix or initial path elements (such as 'java:' or 'jdbc/') that may be shown in third-party tools used for JNDI configuration</li></ol>"
if(_1.status<0){isc.say(_2+_3,{title:"Result of test: Failure"})}else{isc.say(_2,{title:"Result of test: Success"})}},isc.A.saveDB=function isc_DBConfigurator_saveDB(){if(!this.dbForm.validate())return;isc.RPCManager.startQueue();isc.DMI.call({appID:"isc_builtin",className:"com.isomorphic.tools.AdminConsole",methodName:"saveDBConfig",arguments:[this.dbForm.getValues()],callback:this.getID()+".saveDBCallback(data)"});this.getDefinedDatabases();isc.RPCManager.sendQueue()},isc.A.saveDBCallback=function isc_DBConfigurator_saveDBCallback(_1){var _2=this.dbForm.getValue('dbName');isc.say("Saved configuration for database '"+_2+".<p><i>Please wait for the container to reload before continuing.<br>Note that you may need to explicitly restart your servlet engine if you encounter difficulty accessing this database.</i>")});isc.B._maxIndex=isc.C+12;isc.defineClass("DBForm","DynamicForm");isc.A=isc.DBForm.getPrototype();isc.A.titleWidth=200;isc.A.items=[{type:"text",title:"Database Name",name:"dbName",required:true},{changed:"form.setDBFormDefaults()",type:"select",valueMap:{db2:"DB2",db2iSeries:"DB2 for iSeries",firebirdsql:"Firebird",generic:"Generic SQL92 Driver",hsqldb:"HSQLDB",informix:"Informix",cloudsql:"Google Cloud SQL",mysql:"MySQL",mariadb:"MariaDB",oracle:"Oracle",postgresql:"PostgreSQL",sqlserver:"SQLServer"},title:"Database Type",name:"database_type",required:true,redrawOnChange:true},{type:"select",valueMap:{dataSource:"DataSource",driverManager:"DriverManager",jndi:"App Server (JNDI)"},title:"Obtain Connections Using",name:"interface_type",required:true,redrawOnChange:true,changed:function(_1,_2,_3){_1.setDBFormDefaults();if(_3=="jndi"){isc.DMI.call({appID:"isc_builtin",className:"com.isomorphic.tools.AdminConsole",methodName:"discoverJNDIDatabases",callback:_1.getID()+".discoverJNDIDatabasesCallback(data)",requestParams:{prompt:"Please wait - looking for JNDI resources",showPrompt:true}})}}},{type:"hidden",defaultValue:"",name:"driver_context"},{type:"text",hint:"e.g. jdbc/myDB",title:"JNDI Name",name:"driver_name",editorType:"ComboBoxItem",showIf:"form.getValue('interface_type') == 'jndi'",validators:[{type:"requiredIf",expression:"item.isVisible()"}]},{type:"text",width:300,title:"Driver Implementer",name:"driver",validators:[{type:"requiredIf",expression:"item.isVisible()"}],showIf:"form.getValue('interface_type') != 'jndi'"},{changed:"form.setDBFormDefaults()",type:"checkbox",title:"Specify explicit JDBC URL",name:"useURL",redrawOnChange:true,showIf:"form.getValue('interface_type') == 'driverManager'",_constructor:"FormItem"},{type:"text",width:400,title:"Driver URL",name:"driver_url",validators:[{type:"requiredIf",expression:"item.isVisible()"}],showIf:"form.getValue('useURL') && form.getValue('interface_type') != 'jndi'"},{type:"text",defaultValue:"localhost",title:"Server Name",name:"driver_serverName",validators:[{type:"requiredIf",expression:"item.isVisible()"}],showIf:"form.dsShowIf()"},{type:"text",title:"Port Number",name:"driver_portNumber",validators:[{type:"requiredIf",expression:"item.isVisible()"}],showIf:"form.dsShowIf()"},{type:"text",title:"Database Name/SID",name:"driver_databaseName",validators:[{type:"requiredIf",expression:"item.isVisible()"}],showIf:"form.dsShowIf()"},{type:"text",title:"User",name:"driver_user",validators:[{type:"requiredIf",expression:"item.isVisible()"}],showIf:"form.dsShowIf() || !form.getValue('interface_credentialsInURL')"},{type:"text",title:"Password",name:"driver_password",required:false,showIf:"form.dsShowIf() || !form.getValue('interface.credentialsInURL')"},{type:"boolean",name:"interface_credentialsInURL",title:"Pass credentials in JDBC URL",defaultValue:true,redrawOnChange:true,showIf:"form.getValue('interface_type') == 'driverManager'",itemHoverHTML:function(){return"If unchecked, credentials are omitted from the JDBC URL and passed to DriverManager.getConnection() instead"}},{title:"Driver Name",name:"driver_driverName",validators:[{type:"requiredIf",expression:"item.isVisible()"}],showIf:"form.getValue('interface_type') == 'driverManager' && !form.getValue('useURL')"},{title:"Driver Type",name:"driver_driverType",validators:[{type:"requiredIf",expression:"item.isVisible()"}],showIf:"form.getValue('interface_type') == 'dataSource' && (form.getValue('database_type') == 'oracle' || form.getValue('database_type') == 'db2')"},{defaultValue:"tcp",title:"Network Protocol",name:"driver_networkProtocol",showIf:"form.getValue('interface_type') == 'dataSource'"},{type:"checkbox",title:"Enable ISC Connection Pooling",name:"pool_enabled",showIf:"form.getValue('interface_type') != 'jndi'"},{type:"checkbox",title:"Automatically treat a queue as a single transaction",name:"autoJoinTransactions",showIf:"form.getValue('interface_type') != 'jndi'"}];isc.A=isc.DBForm.getPrototype();isc.B=isc._allFuncs;isc.C=isc.B._maxIndex;isc.D=isc._funcClasses;isc.D[isc.C]=isc.A.Class;isc.B.push(isc.A.discoverJNDIDatabasesCallback=function isc_DBForm_discoverJNDIDatabasesCallback(_1){if(!isc.isAn.Array(_1)||_1.length==0)return;this.getField("driver_name").setValueMap(_1)},isc.A.dsShowIf=function isc_DBForm_dsShowIf(){return(this.getValue('interface_type')!='jndi'&&!this.getValue('useURL'))},isc.A.setDBFormDefaults=function isc_DBForm_setDBFormDefaults(){var _1=this;var _2=_1.getValue('database_type');var _3=_1.getValue('interface_type');if(_3=='jndi')return;if(_2=='generic')return;if(!_3){if(_2=='oracle'||_2=='mysql'||_2=='mariadb'||_2=='sqlserver'||_2=='db2')
{_3='dataSource'}else{_3='driverManager'}
_1.setValue('interface_type',_3)}
var _4='';if(_2=='mysql'||_2=='mariadb')_4='3306';else if(_2=='postgresql')_4='5432';else if(_2=='oracle')_4='1521';else if(_2=='sqlserver')_4='1433';else if(_2=='db2')_4='50000'
else if(_2=='firebirdsql')_4='3050'
else if(_2=='informix')_4='1526'
_1.setValue('driver_portNumber',_4);var _5='';if(_3=='dataSource'){if(_2=='oracle')_5='oracle.jdbc.pool.OracleDataSource';else if(_2=='mysql')_5='com.mysql.jdbc.jdbc2.optional.MysqlDataSource';else if(_2=='mariadb')_5='org.mariadb.jdbc.MySQLDataSource';else if(_2=='sqlserver')_5='com.microsoft.sqlserver.jdbc.SQLServerDriver';else if(_2=='postgresql')_5='';else if(_2=='db2')_5='com.ibm.db2.jcc.DB2DataSource';else if(_2=='informix')_5='com.informix.jdbcx.IfxDataSource'}
if(_3=='driverManager'){if(_2=='oracle')_5='oracle.jdbc.driver.OracleDriver';else if(_2=='cloudsql'){_5='com.google.appengine.api.rdbms.AppEngineDriver';_1.setValue('useURL',true);_1.setValue('driver_url','jdbc:google:rdbms://instance_name/db_name')}
else if(_2=='mysql')_5='com.mysql.jdbc.Driver';else if(_2=='mariadb')_5='org.mariadb.jdbc.Driver';else if(_2=='sqlserver')_5='';else if(_2=='postgresql')_5='org.postgresql.Driver';else if(_2=='db2')_5='';else if(_2=='firebirdsql')_5='org.firebirdsql.jdbc.FBDriver';else if(_2=='informix')_5='com.informix.jdbc.IfxDriver'}else{_1.setValue('useURL',false)}
_1.setValue('driver',_5);var _6=_1.getValue('driver_serverName');if(_6=='Embedded in JDBC URL')_1.setValue('driver_serverName','');if(_2=="db2")_1.setValue("driver_driverType","4");else if(_2=="oracle")_1.setValue("driver_driverType","thin");if(_1.getValue('useURL')==false)_1.setValue('driver_url',null);var _7=null;if(_3=='driverManager')_7=_2;_1.setValue('driver_driverName',_7);if(_2=='hsqldb')_1.setValue("autoJoinTransactions",true);else if(_2=='oracle')_1.setValue("autoJoinTransactions",true);else if(_2=='cloudsql')_1.setValue("autoJoinTransactions",true);else if(_2=='mysql')_1.setValue("autoJoinTransactions",true);else if(_2=='mariadb')_1.setValue("autoJoinTransactions",true);else if(_2=='sqlserver')_1.setValue("autoJoinTransactions",true);else if(_2=='postgresql')_1.setValue("autoJoinTransactions",true);else if(_2=='db2')_1.setValue("autoJoinTransactions",true);else if(_2=='firebirdsql')_1.setValue("autoJoinTransactions",true);else if(_2=='informix')_1.setValue("autoJoinTransactions",true);else if(_2=='cache')_1.setValue("autoJoinTransactions",false);else if(_2=='generic')_1.setValue("autoJoinTransactions",false)});isc.B._maxIndex=isc.C+3;isc._nonDebugModules=(isc._nonDebugModules!=null?isc._nonDebugModules:[]);isc._nonDebugModules.push('AdminConsole');isc.checkForDebugAndNonDebugModules();isc._moduleEnd=isc._AdminConsole_end=(isc.timestamp?isc.timestamp():new Date().getTime());if(isc.Log&&isc.Log.logIsInfoEnabled('loadTime'))isc.Log.logInfo('AdminConsole module init time: '+(isc._moduleEnd-isc._moduleStart)+'ms','loadTime');delete isc.definingFramework;if(isc.Page)isc.Page.handleEvent(null,"moduleLoaded",{moduleName:'AdminConsole',loadTime:(isc._moduleEnd-isc._moduleStart)});}else{if(window.isc&&isc.Log&&isc.Log.logWarn)isc.Log.logWarn("Duplicate load of module 'AdminConsole'.");}

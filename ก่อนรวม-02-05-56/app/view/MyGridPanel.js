/*
 * File: app/view/MyGridPanel.js
 *
 * This file was generated by Sencha Architect version 2.2.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.view.MyGridPanel', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.mygridpanel',

    height: 250,
    id: 'mygridpanel',
    itemId: 'mygridpanel',
    title: 'My Grid Panel',
    store: 'StoreEmp',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            columns: [
                {
                    xtype: 'rownumberer',
                    width: 50,
                    align: 'center'
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    dataIndex: 'empId',
                    text: 'Emp Id'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'firstName',
                    text: 'First Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'middleName',
                    text: 'Middle Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'lastName',
                    text: 'Last Name'
                },
                {
                    xtype: 'gridcolumn',
                    dataIndex: 'status',
                    text: 'Status'
                }
            ]
        });

        me.callParent(arguments);
    }

});

import {
	IExecuteFunctions,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
	//NodeOperationError,
	//IRequestOptions,
	LoggerProxy
} from 'n8n-workflow';


export class Template implements INodeType {
  description: INodeTypeDescription = {
    displayName: 'Template',
    name: 'template',
    group: ['transform'],
    version: 1,
    description: 'Use as base code for new n8n nodes',
    defaults: {
      name: 'Template',
    },
    inputs: ['main'],
    outputs: ['main'],
    credentials: [

    ],
    properties: [
      
    ],
  };
  async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
    const items = this.getInputData();
    const returnData: INodeExecutionData[] = [];

    //const credentials = await this.getCredentials('xx');
    //if (!credentials) {
    //  throw new NodeOperationError(this.getNode(), 'No credentials got returned!');
    //}
	LoggerProxy.info(`Hello from Template`)
    for (let i = 0; i < items.length; i++) {
		
	  }

	  return [returnData];
	}

}
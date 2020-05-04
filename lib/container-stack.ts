import * as cdk from '@aws-cdk/core';
import { readYamlFromDir } from '../utils/read-file';

export class ContainerStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);


  }

}



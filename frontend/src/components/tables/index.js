import colors from "../colors"
import { TableLine, TableWrapper } from "./style"
import { Column, Row } from "../style"

const Tables = ({jsTable}) => {

  return (
    <TableWrapper>
      {
        Object.keys(jsTable).map((section, index) => {
          return (
            <Row style={{width: 'calc(100% - 10px)'}} key={section}>
              <Column style={{width: 150}}>
                <div style={{minHeight: 70, display: 'flex', alignItems: 'center'}}>{section}</div>
                <TableLine/>
              </Column>
              <Column style={{width: '100%'}}>
                {
                  jsTable[section].rows.map((row, index) => {
                    if (Array.isArray(row)) {
                      let backgroundColor
                      if (index == 0) backgroundColor = colors.slate
                      else if ( index % 2 == 0) backgroundColor = colors.spruce
                      return (
                        <Row 
                          style={{
                            minHeight: 70,
                            alignItems: 'center',
                            display: 'flex',
                            width: '90%',
                            backgroundColor: backgroundColor,
                            padding: "0px 5%",
                            transform: "skew(-15deg)"
                          }}
                          key={row}
                        >
                          {
                            row.map((content, index) => {

                              return (
                                <div style={{width: jsTable[section].rowWidth[index]}} key={content}>
                                  {content}
                                </div>
                              )
                            })
                          }
                        </Row>
                      )
                    }
                  })
                }
                <div style={{height: 70}}/>
                {
                  jsTable[section].rows.map((row, index) => {
                    if (!Array.isArray(row)) {
                      return <Tables jsTable={row}/>
                    }
                  })
                }
              </Column>
            </Row>
          )
        })
      }
    </TableWrapper>
  )
}

export default Tables